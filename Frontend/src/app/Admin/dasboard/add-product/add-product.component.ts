import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicineService } from 'src/app/service/medicine.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private medicine:MedicineService,
              private router:Router) { }

  ngOnInit(): void {
  }

  Add(AddForm:NgForm){
    this.medicine.addProduct(AddForm.value).subscribe(result=>{
      if(result.msg){
        this.router.navigate(['/dashboard']);
      }
    })
  }
}
