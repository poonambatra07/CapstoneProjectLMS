import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/service/medicine.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  pid:any;
  product:any;
  constructor(private MediSer:MedicineService,
    private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(data=>this.pid=data['productId']);
    this.getProductDetails();
  }

  getProductDetails(){
    this.MediSer.findProductByID(this.pid).subscribe(result=>{
      if(result){
        this.product=result;
      }else{
        console.log('some error');
      }
    })
  }

}
