const mongoose =require("mongoose");

const {Schema}=mongoose;

const userSchema=new Schema({
    name:{
        type: String,
        minlength:2,
        required: true
    },
    email:{
        type: String,
        minlength:2,
        required:true,
    }
})
userSchema.path('email').validate(function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email.text);
 }, 'The e-mail field cannot be empty.')

module.exports=userSchema