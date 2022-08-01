let moongose=require('mongoose');
moongose.pluralize(null);

let CartSchema=moongose.Schema({
    _id:Number,
    Id:Number,
    qty:String,
    price:Number,
    name:String,
    userId:String
});

let CartModel=moongose.model("Cart",CartSchema);

module.exports=CartModel;