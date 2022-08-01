let express=require('express');
let router=express.Router();

let loginController=require("../controller/loginController");
router.post("/signUp",loginController.signUp);

router.post("/signIn",loginController.signIn);
router.get("/AllUsers",loginController.getAllusers);
router.get("/getUser/:id",loginController.getUSer);
router.put("/updateUser",loginController.updateUser);
router.put("/updateUserBalance",loginController.updateUserBalance);
router.get("/getTotal",loginController.countOfUser);
module.exports=router;