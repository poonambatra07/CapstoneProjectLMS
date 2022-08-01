import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from 'src/app/service/checkout.service';
import { MedicineService } from 'src/app/service/medicine.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderData:Array<any>=[];
  constructor(private activateRouter:ActivatedRoute,
    private orderSer:CheckoutService,
    private MedicineSer:MedicineService) { }
 
  orderId:any;
  ngOnInit(): void {
    this.activateRouter.params.subscribe(data=>this.orderId=data['orderid']);
    this.orderSer.getOrder(this.orderId).subscribe(result=>{
      if(result.msg && result.msg!==undefined && result.msg!== ''){
        let products=JSON.parse(result.msg.Products);
        products.forEach((a:any)=>{
          console.log(a);
          this.MedicineSer.findProductByID(a._id).subscribe(res=>{
            a.image=res.image;
          })
        })
    
       this.orderData.push({orderId:result.msg._id,amount:result.msg.amount,products:products,date:result.msg.Date})
      }
    })
    
    
  }
  showDetails(orderId:any){

  }
}
