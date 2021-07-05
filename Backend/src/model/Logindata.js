const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.at4m7.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    email : String,
    password : String
});

var Logindata = mongoose.model('logindata', LoginSchema);

module.exports = Logindata;