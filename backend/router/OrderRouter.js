let express=require("express");
let router=express.Router();// router reference.

let orderController=require("../controller/OrderController");

router.get("/getUserOrder/:userId",orderController.getUserOrder);

router.post("/storeOrder",orderController.storeOrder);

router.get("/findOrderById/:orderId",orderController.findOrderById);

router.get("/allorder",orderController.retrieveOrderInfo);

router.get("/getTotal",orderController.countOfOrder);

module.exports=router;