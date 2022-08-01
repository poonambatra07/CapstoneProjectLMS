let express=require("express");
let router=express.Router();// router reference.

let medicineContoller=require("../controller/MedicineController");

router.get("/getAllMedicine",medicineContoller.retrieveProductInfo);

router.post("/storeMedicine",medicineContoller.storeProduct);


router.put("/updateMedicine",medicineContoller.updateProduct);

router.delete("/deleteMedicine/:pid",medicineContoller.deleteProductById);

router.get("/findMedicine/:pid",medicineContoller.findProductById);

router.get("/getTotal",medicineContoller.countOfProduct);

router.get("/findProducts/:pidArray",medicineContoller.retrieveProducts)


module.exports=router;