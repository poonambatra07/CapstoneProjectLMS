import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';
import { ShareValueService } from 'src/app/service/share-value.service';
import { CheckoutService } from 'src/app/service/checkout.service';
import { CartProductService } from 'src/app/service/cart-product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  UserID?:any;
  userData:any;
  cartTotal:any;
  showAddBalanceButton:boolean=false;
  showForm:boolean=false;
  amount:number=0;
  orderData:any;
  ProductArray:any=[];
  d=new Date();

  constructor(private activateRouter:ActivatedRoute,
    private router:Router,
    private userSer:UserService,
    private toastr:ToastrService,
    private shareSer:ShareValueService,
    private orderSer:CheckoutService,
    private cartSer:CartProductService) { }

  ngOnInit(): void {
    this.UserID=localStorage.getItem("userID");
    this.getLoggedInUserInfo();
   // this.cartTotal=this.shareSer.getCartTotal();
  }

  getLoggedInUserInfo(){
  //  this.cartTotal1=this.shareSer.getCartTotal();
    this.userSer.getUser(this.UserID).subscribe(data=>{
      if(data){
        this.userData=data;
      }
    })
  }
  addBalance(){
   this.showForm=!this.showForm;
  }
  Addamount(){
    if(this.amount>0){
    this.amount=this.userData[0].amount+this.amount;
    this.userSer.updateUserBalance({userId:this.UserID,amount:this.amount}).subscribe((msg:any)=>{
    if(msg.msg && msg.error=='')
    this.toastr.success("Balance Added Successfully");
    else
    this.toastr.error("Some error.Pleae try again");
    this.showAddBalanceButton=!this.showAddBalanceButton;
    this.showForm=!this.showForm;
    this.getLoggedInUserInfo();
    
    })
  }else{
    this.toastr.warning("Please enter valid amount")
  }
  }
  ProcessCheckout(){
    // JSON.parse(localStorage.getItem("cartItems"))?.forEach(element => {
      
    // });
    this.ProductArray=localStorage.getItem("cartItems");
    this.ProductArray=JSON.parse(this.ProductArray);

    this.cartTotal=localStorage.getItem("cartTotal");
    if(this.userData[0].amount < this.cartTotal){
      this.showAddBalanceButton=!this.showAddBalanceButton;
      this.toastr.warning("You don't have enough balance to place order.Please add balance first.")
    }else{
      let date=`${this.d.getDate()}-${this.d.getMonth()}-${this.d.getFullYear()} ${this.d.getHours()}:${this.d.getMinutes()}`;
      this.orderData={"userId":this.UserID,amount:this.cartTotal,Date:date,Products:JSON.stringify(this.ProductArray)};
      this.orderSer.addOrder(this.orderData).subscribe(result=>{
        if(result.msg){
          this.toastr.success("Order place successfully.")
          this.cartSer.deleteUSerCart(this.UserID).subscribe(msg=>{
          })
          this.amount= this.userData[0].amount - this.cartTotal;
          this.userSer.updateUserBalance({userId:this.UserID,amount:this.amount}).subscribe((msg:any)=>{
            this.getLoggedInUserInfo();
          })
          
          this.router.navigate(["thankyou"]);//Thank you component
        }
      })
      console.log(this.orderData)
    }
   
    
  }
}
