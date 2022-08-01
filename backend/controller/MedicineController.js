let medicineModel=require("../model/MedicineModel");


let retrieveProductInfo=(req,res)=>{
    medicineModel.find({},(err,result)=>{
        if(!err){
            res.json(result);
        }else{
            res.json({"error":err});
        }
    })
}
let storeProduct=(req,res)=>{
    let product=req.body;
    medicineModel.insertMany(product,(err,result)=>{
        if(!err){
            res.json({msg:"Record inserted successfully",error:""})
        }else{
            res.json({"error":err,msg:""});
        }
    })
}

let updateProduct=(req,res)=>{
    let mid=req.body._id;
    let newPrice=req.body.price;
    let newDesc=req.body.description;
    let newBrand=req.body.brand;
    let newImage=req.body.image;
    let newName=req.body.name;
    medicineModel.updateMany({_id:mid},{$set:{name:newName,price:newPrice,description:newDesc,brand:newBrand,image:newImage}},(err,result)=>{
        if(!err){
            //res.send(result);
            if(result.modifiedCount>0 || result.modifiedCount>0){
                  res.json({msg:"record updated successfully",error:""});
            }else{
                 res.json({error:"record did not updated",msg:""});
            }
            
          
        }else{
            res.json({"error":err});
        }
    })
}
let deleteProductById=(req,res)=>{
   let pid=req.params.pid;
   medicineModel.deleteOne({_id:pid},(err,result)=>{
        if(!err){
            if(result.deletedCount>0){
                res.json({msg:"record deleted successfully",error:""});
            }else{
                res.json({msg:"",error:err});
            }

        }else{
            res.json({msg:"",error:err});
        }
    })
}
let findProductById = (req,res)=> {
    let pid = req.params.pid;
    medicineModel.findById({_id:pid},(err,result)=> {
        if(!err){
                res.send(result);
        }else {
                res.send(err);
        }
    })
}
let countOfProduct =(req,res)=>{
    medicineModel.count((err,result)=>{
        if(!err){
            res.json({count:result,error:""});
    }else {
            res.json({count:"",error:err});
    } 
    })
}

let retrieveProducts=(req,res)=>{
    
    let pidArray=req.params.pidArray;
    pidArray=pidArray.split(',')
    console.log(pidArray);
    medicineModel.find({_id:{$in:pidArray}},(err,result)=>{
        if(!err){
            res.json(result);
        }else{
            res.json({"error":err});
        }
    })
}
module.exports ={findProductById,retrieveProductInfo,storeProduct,updateProduct,deleteProductById,countOfProduct,retrieveProducts};

