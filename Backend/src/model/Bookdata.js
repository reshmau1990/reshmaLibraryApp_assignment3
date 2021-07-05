const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.at4m7.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    title : String,
    author : String,
    genre : String,
    description : String,
    imageUrl : String
});

var Bookdata = mongoose.model('book', NewBookSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Bookdata;