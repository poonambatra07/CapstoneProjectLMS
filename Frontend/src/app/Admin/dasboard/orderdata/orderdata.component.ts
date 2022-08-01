import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/service/checkout.service';

@Component({
  selector: 'app-orderdata',
  templateUrl: './orderdata.component.html',
  styleUrls: ['./orderdata.component.css']
})
export class OrderdataComponent implements OnInit {

  constructor(private orderSer:CheckoutService) { }
  orderData:any;
  ngOnInit(): void {
    this.getAllOrder();
  }

  getAllOrder(){
    this.orderSer.getAllOrder().subscribe(data=>{
      this.orderData=data;
    })
  }
}
