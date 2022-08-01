import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from 'src/app/service/checkout.service';
import { MedicineService } from 'src/app/service/medicine.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  constructor(private activate:ActivatedRoute,private orderSer:CheckoutService,
    private MedicineSer:MedicineService) { }
 orderId:any;
 orderData:Array<any>=[];

  ngOnInit(): void {
    this.activate.params.subscribe(data=>{
      console.log(data)
      this.orderId=data['orderid']
    });
    
    this.orderSer.getOrder(this.orderId).subscribe(result=>{
      if(result.msg && result.msg!==undefined && result.msg!== ''){
        let products=JSON.parse(result.msg.Products);
        products.forEach((a:any)=>{
          this.MedicineSer.findProductByID(a._id).subscribe(res=>{
            a.image=res.image;
          })
        })
    
       this.orderData.push({orderId:result.msg._id,amount:result.msg.amount,products:products,date:result.msg.Date})
       console.log(this.orderData)
      }
    })
  }


}
