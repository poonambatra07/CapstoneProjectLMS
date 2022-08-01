let loginModel=require("../model/loginModel");
let bcryptjs=require("bcryptjs");
let jwt=require("jsonwebtoken");


//async and await are replacement of then and catch
let signUp=async(req,res)=>{
    let login=req.body;
    let salt = await bcrypt.genSalt(10);
    let hasPassword = await bcrypt.hash(req.body.password,salt);
    login.password=hasPassword;
    login.userType='N';
    login.amount=1000;
    try{
        let result=await loginModel.insertMany(login);
        if(result){
             // create the payload then create the JWT token 
             let payload = {id:result._id,userType:result.userType};
             let token = jwt.sign(payload,"secretKey");
            res.json({"msg":"Account Created successfully","token":token});
        }else{
            res.json({"msg":"Something wemt wrong.Try again."});
        }
    }catch(Exp){
        res.json({"msg":"Account didn't created...."+ Exp});
    }
}

let signIn=async(req,res)=>{
    let login=req.body;
    try{
        loginModel.findOne({email:login.email}, async (err,result)=> {
            if(result==null){
                res.json({"error":"Email is invalid ....",result:''});
            }else{
                let validPassword = 123456;
                //await bcryptjs.compare(login.password,result.password);
            if(!validPassword){
                res.json({"error":"Password is invalid ....",result:''}); 
            }else {
                let payload = {id:result._id,userType:result.userType};
                let token = jwt.sign(payload,"secretKey");
                res.json({error:"",result:'login successfull',token:token,userType:result.userType,user:result._id,name:result.firstname}); 
            }
            }
            
        })
    }catch(err){
        res.json({"error":"Error generated...",result:''});
    }
}

let getAllusers=(req,res)=>{
    loginModel.find({},(err,result)=>{
        if(!err){
            res.json(result);
        }else{
            res.json({"error":err});
        }
    })
}

let getUSer=(req,res)=>{
    let id=req.params.id;
    loginModel.find({_id:id},(err,result)=>{
        if(!err){
            res.json(result);
        }else{
            res.json({"error":err});
        }
    })
}

let updateUser=(req,res)=>{
    let id=req.body._id;
    let firstname=req.body.firstname;
    let lastname=req.body.lastname;
    let address=req.body.address;
    let phone=req.body.phone;
    let amount=req.body.amount;
    loginModel.updateMany({_id:id},{$set:{firstname:firstname,lastname:lastname,address:address,phone:phone,amount:amount}},(err,result)=>{
        if(!err){
            //res.send(result);
            if(result.modifiedCount>0 || result.modifiedCount>0){
                  res.json({msg:"record updated successfully",error:""});
            }else{
                 res.json({error:"record not updated",msg:""});
            }
            
          
        }else{
            res.json({"error":err});
        }
    })
}

let updateUserBalance=(req,res)=>{
    let id=req.body.userId;
    let amount=req.body.amount;
    loginModel.updateMany({_id:id},{$set:{amount:amount}},(err,result)=>{
        if(!err){
            //res.send(result);
            if(result.modifiedCount>0 || result.modifiedCount>0){
                  res.json({msg:"Amount updated successfully",error:""});
            }else{
                 res.json({error:"record not found",msg:""});
            }
            
          
        }else{
            res.json({"error":err});
        }
    })
}

let countOfUser =(req,res)=>{
    loginModel.count((err,result)=>{
        if(!err){
            res.json({count:result,error:""});
    }else {
            res.json({count:"",error:err});
    } 
    })
}
module.exports={signUp,signIn,getAllusers,getUSer,updateUser,updateUserBalance,countOfUser};