let cartModel=require("../model/cartModel");
//async and await are replacement of then and catch
let addCart=async(req,res)=>{
    let cart=req.body;
    let pid=req.body.productId;
    let qty=req.body.qty;
    let userId=req.body.userId || '';
    try{
        cartModel.findOne({$and:[{_id:pid},{userId:userId}]},(err,result)=> {
            if(!err){
                if(result && result!==undefined && result.length!=0){
                    cartModel.updateOne({$and:[{_id:pid},{userId:userId}]},{$set:{qty:parseInt(qty)+parseInt(result.qty)}},(err,result)=>{
                        if(!err){
                            //res.send(result);
                            if(result.matchedCount>0 || result.modifiedCount>0){
                                  res.json({msg:"record updated successfully"});
                            }else{
                                 res.json({msg:"record did not updated"});
                            }
                            
                          
                        }else{
                            res.json({"error":err});
                        }
                    })
                }else{
                    cartModel.insertMany(cart,(err,result)=>{
                        if(!err){
                            res.json({msg:"Record inserted successfully"})
                        }else{
                            res.json({"error":err});
                        }
                    })
                }
           
            }else{
                res.json({"error":err});
            }

        })
        
    }catch(Exp){
        res.send("Some Error"+ Exp);
    }
}

let getCart=async(req,res)=>{
    cartModel.find({},(err,result)=>{
        if(!err){
            if(result)
            res.json(result);
            else
            res.json({msg:"No record found"});
        }else{
            res.json({"error":err});
        }
    })
}

let getUserCart=async(req,res)=>{
    userId=req.params.userId;
    cartModel.find({userId:userId},(err,result)=>{
        if(!err){
            if(result)
            res.json(result);
            else
            res.json({msg:"No record found"});
        }else{
            res.json({"error":err});
        }
    })
}

let deleteUserCart=(req,res)=>{
    let userId=req.params.userid;
    if(userId !==undefined){
        cartModel.deleteMany({userId:userId},(err,result)=>{
            if(!err){
                if(result.deletedCount>0){
                    res.json({msg:"Cart deleted successfully",error:""});
                }else{
                    res.json({msg:"",error:err});
                }
    
            }else{
                res.json({msg:"",error:err});
            }
        })
    }else{
        cartModel.deleteMany({},(err,result)=>{
            if(!err){
                if(result.deletedCount>0){
                    res.json({msg:"Cart deleted successfully",error:""});
                }else{
                    res.json({msg:"",error:err});
                }
    
            }else{
                res.json({msg:"",error:err});
            }
        })
    }
  
 }
 let deleteCartItem=(req,res)=>{
    let userId=req.params.userid;
    let pid=req.params.pid;
    console.log(userId,pid,'lllllllllll');
    if(userId !==undefined && pid !== undefined){
        cartModel.deleteOne({$and:[{_id:pid},{userId:userId}]},(err,result)=>{
            if(!err){
                if(result.deletedCount>0){
                    res.json({msg:"Cart deleted successfully",error:""});
                }else{
                    res.json({msg:"",error:err});
                }
    
            }else{
                res.json({msg:"",error:err});
            }
        })
    }else{
        res.json({msg:"",error:"Something went wrong"});
    }
  
 }
module.exports={addCart,getCart,getUserCart,deleteUserCart,deleteCartItem};