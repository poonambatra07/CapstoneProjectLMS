import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/model/medicine.model';
import { MedicineService } from 'src/app/service/medicine.service';
import { WishlistService } from 'src/app/service/wishlist.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  childTitle:string = 'This text is passed to child';
  constructor(public MedicineService:MedicineService,
              public wishlist:WishlistService) { }
  medicine?:Array<Medicine>;
  wishlistPid?:Array<Number>;
  userId:any;

  ngOnInit(): void {
    this.userId=localStorage.getItem('userID') || '';
    this.getAllMedicine();
    this.loadAllwishlistData();
  }
  
  getAllMedicine(){
    this.MedicineService.loadAllMedicine().subscribe(data=>{
      this.medicine=data;
    });
  }

  loadAllwishlistData(){
    this.wishlist.getalldataUser(this.userId).subscribe((items=>{  
      this.wishlistPid=items;     
    }))
  }
}
