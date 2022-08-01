import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicineService } from 'src/app/service/medicine.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  products=[];
  EditProduct:Number=0;
  constructor(public medicine:MedicineService,
              private toastr:ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.medicine.loadAllMedicine().subscribe((items:any)=>{
      this.products=items;
    })
  }
  editProduct(productId:any){
    if(!this.EditProduct)
    this.EditProduct=productId;
    else
    this.EditProduct=0;

  }
  Edit(EditForm:NgForm){
    this.medicine.editProductByID(EditForm.value).subscribe(result=>{
      if(!result.error && result.msg){
        this.EditProduct=0;
        this.toastr.success("Product updated Successfully.")
        this.getAllProducts();
      }
    })
  }
  DeleteProduct(pid:number){
    this.medicine.deleteProduct(pid).subscribe(result=>{
      if(result.msg){
        this.toastr.success("Product Deleted Successfully.")
        this.getAllProducts();
      }
    })
  }

}
