let moongose=require('mongoose');
moongose.pluralize(null);

let MedicineSchema=moongose.Schema({
    _id:Number,
    name:String,
    price:Number,
    image:String,
    brand:String,
    description:String
});

let MedicineModel=moongose.model("Medicine",MedicineSchema);

module.exports=MedicineModel;