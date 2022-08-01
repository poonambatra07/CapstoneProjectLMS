import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/service/checkout.service';
import { MedicineService } from 'src/app/service/medicine.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private userSer:UserService,private OrderSer:CheckoutService,private prodSer:MedicineService) { }

  ngOnInit(): void {
  }
  Totalcount:String='';
  selectedDevice = '';
  orderdata:any;
  proddata:any;
  userdata:any;
  onChange(newValue:any) {
    this.selectedDevice = newValue;
    if(this.selectedDevice=='O'){
      this.OrderSer.getOrderTotal().subscribe((result:any)=>{
        if(!result.err){
          this.Totalcount=result.count;
        }
      })
      this.OrderSer.getAllOrder().subscribe((result:any)=>{
        this.orderdata=result;
      })
    }else if(this.selectedDevice=='U'){
      this.userSer.getUserTotal().subscribe((result:any)=>{
        if(!result.err){
          this.Totalcount=result.count;
        }
      })
      this.userSer.getAllUSers().subscribe(result=>{
        this.userdata=result;
        console.log(result)
      })
    }else if(this.selectedDevice=='P'){
      this.prodSer.getProductTotal().subscribe((result:any)=>{
        if(!result.err){
          this.Totalcount=result.count;
        }
      })
      this.prodSer.loadAllMedicine().subscribe((result)=>{
        this.proddata=result;
        
      })
    }
}


}
