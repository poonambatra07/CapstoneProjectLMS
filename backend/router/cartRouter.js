let express=require('express');
let router=express.Router();

let cartController=require("../controller/cartController");
router.delete("/deleteCartItem/:userid/:pid",cartController.deleteCartItem);
router.post("/addToCart",cartController.addCart);
router.get("/getCartData",cartController.getCart);
router.get("/getUserCart/:userId",cartController.getUserCart);
router.delete("/deleteUserCart/:userid",cartController.deleteUserCart);

module.exports=router;