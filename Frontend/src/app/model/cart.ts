 import { Medicine } from "./medicine.model";
export class Cart {
    constructor(
        public _id:Number,
        public productId:Number,
        public qty=1,
        public price:Number,
        public productName:String,
        public Medicine:Medicine
    ){
        this._id=Medicine._id;
        this.productId=Medicine._id;
        this.qty=qty;
        this.price=Medicine.price;
        this.productName=Medicine.name;
        
    }
}
