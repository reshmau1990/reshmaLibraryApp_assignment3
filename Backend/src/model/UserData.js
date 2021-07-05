const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.at4m7.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    username : String,
    email : String,
    password : String,
});

var UserData = mongoose.model('userdata', RegisterSchema);

module.exports = UserData;