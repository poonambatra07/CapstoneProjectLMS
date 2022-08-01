let moongose=require('mongoose');
moongose.pluralize(null);

let OrderSchema=moongose.Schema({
    userId:String,
    amount:Number,
    Date:String,
    Products:String
});

let OrderModel=moongose.model("Order",OrderSchema);

module.exports=OrderModel;