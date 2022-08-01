let express=require("express");
let mongoose=require("mongoose");
let cors=require("cors");

let medicineRouter=require("./router/MedicineRouter");
let loginRouter=require('./router/loginRouter');
let cartRouter=require('./router/cartRouter');
let orderRouter=require('./router/OrderRouter');

let url="mongodb://localhost:27017/lms";

mongoose.connect(url).
then(result=>console.log("Connected")).
catch(err=>console.log("error generate "+err));

let app=express();

app.use(express.json());
app.use(cors());

app.use("/api/medicine",medicineRouter);
app.use("/api/user",loginRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);



app.listen(9091,()=>"application running on port number 9091");