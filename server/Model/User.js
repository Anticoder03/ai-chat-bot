const mongoose = require('mongoose')
const UserSchma = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const UserModel = mongoose.model("users",UserSchma);
module.exports = UserModel