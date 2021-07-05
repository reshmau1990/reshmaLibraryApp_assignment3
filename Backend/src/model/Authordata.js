const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.at4m7.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

var NewAuthorSchema = new Schema({
    authorname : String,
    description : String,
    imageUrl : String
});

var Authordata = mongoose.model('author', NewAuthorSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Authordata;