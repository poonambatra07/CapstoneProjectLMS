let OrderModel=require("../model/OrderModel");


let retrieveOrderInfo=(req,res)=>{
    OrderModel.find({},(err,result)=>{
        if(!err){
            res.json(result);
        }else{
            res.json({"error":err});
        }
    })
}
let storeOrder=(req,res)=>{
    let orderData=req.body;
    OrderModel.insertMany(orderData,(err,result)=>{
        if(!err){
            res.json({msg:"Order Placed successfully",error:""})
        }else{
            res.json({"error":err,msg:""});
        }
    })
}


let getUserOrder = (req,res)=> {
    let userId = req.params.userId;
    OrderModel.find({userId:userId},(err,result)=> {
        if(!err){
                res.send(result);
        }else {
                res.send(err);
        }
    })
}
let findOrderById = (req,res)=> {
    let orderId = req.params.orderId;
    console.log(orderId);
    OrderModel.findById({_id:orderId},(err,result)=> {
        if(!err){
                res.send({msg:result,error:''});
        }else {
                res.send({msg:'',error:err});
        }
    })
}

let countOfOrder =(req,res)=>{
    OrderModel.count((err,result)=>{
        if(!err){
            res.json({count:result,error:""});
    }else {
            res.json({count:"",error:err});
    } 
    })
}

module.exports ={getUserOrder,storeOrder,retrieveOrderInfo,findOrderById,countOfOrder};

