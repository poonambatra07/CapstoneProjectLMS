let mongoose = require("mongoose");
mongoose.pluralize(null);
let loginSchema = mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    password:String,
    firstname:String,
    lastname:String,
    phone:String,
    address:String,
    userType:String,
    amount:Number

});
let loginModel = mongoose.model("User",loginSchema);

module.exports=loginModel;