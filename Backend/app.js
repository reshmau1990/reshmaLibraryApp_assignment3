const express = require('express');
const BookData = require('./src/model/Bookdata');
const AuthorData = require('./src/model/Authordata');
const UserData = require('./src/model/UserData');
const port = process.env.PORT || 3000;
// const User = require('./src/model/user');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json());
email='admin123@gmail.com';
password='Admin@123';

app.use(express.urlencoded({ extended: true }));

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

app.post('/login', (req, res) => {
    let user = req.body

    if(email){
      if(password==user.password){
          let payload = {subject: email+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
      }
      else{
        UserData.findOne({email: user.email, password: user.password}, function(err, item){
          if(err){
               res.status(401).send('Invalid credentials');
          }
          if(item){
               res.send(item);
          }
          else{
            res.status(401).send('Invalid');
          }

        })
      }
    }
        // if (!email) {
        //   res.status(401).send('Invalid Username')
        // } else 
        // if ( password !== userData.password) {
        //   res.status(401).send('Invalid Password')
        // } else {
        //   let payload = {subject: email+password}
        //   let token = jwt.sign(payload, 'secretKey')
        //   res.status(200).send({token})
        // }    
})

app.post('/sign-up/insert', (req,res)=>{
  
    var item = {
      username: req.body.item.username,
      email: req.body.item.email,
      password: req.body.item.password,
      cpassword: req.body.item.password
  }

  UserData.findOne({email:item.email}, function(err,item){
  if(item){
    res.status(401).send('User already exists');
  }
  else{
    var item = {
      username: req.body.item.username,
      email: req.body.item.email,
      password: req.body.item.password,
      cpassword: req.body.item.password
  }
    var user = new UserData(item);
    user.save();
    res.send(item);
  }
  })
})

app.get('/books',function(req,res){  
  BookData.find()
              .then(function(books){
                  res.send(books);
              });
});

app.get('/books/:id',  (req, res) => {
  
  const id = req.params.id;
    BookData.findOne({"_id":id})
    .then((book)=>{
        res.send(book);
    });
})



app.get('/authors',function(req,res){  
  AuthorData.find()
              .then(function(authors){
                  res.send(authors);
              });
});

app.get('/authors/:id',  (req, res) => {
  
  const id = req.params.id;
    AuthorData.findOne({"_id":id})
    .then((author)=>{
        res.send(author);
    });
})

app.post('/books/insert',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var book = {
        title : req.body.book.title,
        author : req.body.book.author,
        genre : req.body.book.genre,
        description : req.body.book.description,
        imageUrl : req.body.book.imageUrl,
   }       
   var book = new BookData(book);
   book.save();
});

app.post('/authors/insert',verifyToken,function(req,res){
   
  console.log(req.body);
 
  var author = {       
      authorname : req.body.author.authorname,
      description : req.body.author.description,
      imageUrl : req.body.author.imageUrl,
 }       
 var author = new AuthorData(author);
 author.save();
});


app.put('/books/update',verifyToken,(req,res)=>{
      console.log(req.body)
      id=req.body._id,
 
      title = req.body.title,
      author = req.body.author,
      genre = req.body.genre,
      description = req.body.description,
      imageUrl = req.body.imageUrl
     BookData.findByIdAndUpdate({"_id":id},
                                  {$set:{"title":title,
                                  "author":author,
                                  "genre":genre,
                                  "description":description,
                                  "imageUrl":imageUrl}})
     .then(function(){
         res.send();
     })
   })

  app.put('/authors/updateauthor',verifyToken,(req,res)=>{
    console.log(req.body)
    id=req.body._id,

    authorname = req.body.authorname,
    description = req.body.description,
    imageUrl = req.body.imageUrl
    AuthorData.findByIdAndUpdate({"_id":id},
                                {$set:{"authorname":authorname,
                                "description":description,
                                "imageUrl":imageUrl}})
   .then(function(){
       res.send();
   })
 })

    
   
app.delete('/books/remove/:id',verifyToken,(req,res)=>{
   
     id = req.params.id;
     BookData.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })

   app.delete('/authors/remove/:id',verifyToken,(req,res)=>{
   
    id = req.params.id;
    AuthorData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
     
  app.listen(port, ()=>{
    console.log("Server is ready at "+port);
});

