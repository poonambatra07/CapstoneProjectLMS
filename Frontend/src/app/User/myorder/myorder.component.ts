import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {

  userId:any;
  orderData:Array<any>=[];
  showDetail:boolean=false;
  orderId:any;
  constructor(private userSer:UserService,private router:Router) { }
  

  ngOnInit(): void {
    this.userId=localStorage.getItem("userID");
    this.getUSerOrderData();
  }

  getUSerOrderData(){
    this.userSer.getUserOrderDetails(this.userId).subscribe((result:any)=>{

     for(let i of result){
      this.orderData.push({orderId:i._id,amount:i.amount,products:JSON.parse(i.Products),date:i.Date})
     
     }
     console.log(this.orderData)
    })
  }
  showDetails(order:any){
    this.showDetail=!this.showDetail;
    this.orderId=order;
    this.router.navigate(["orderDetails",this.orderId]);
   
  }
}
