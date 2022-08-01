import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from 'src/app/model/medicine.model';
import { MedicineService } from 'src/app/service/medicine.service';
import { WishlistService } from 'src/app/service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlistPid?:Array<Number>;
  medicine?:Array<Medicine>;
  userId:any;

  constructor(
    private MedicineSer:MedicineService, public wishlist:WishlistService) { }

  ngOnInit(): void {
  this.userId=localStorage.getItem('userID') || '';
   this.loadAllwishlistData();
  }

  loadAllwishlistData(){
    this.wishlist.getalldataUser(this.userId).subscribe((items=>{
      this.wishlistPid=items.join(',');
      if(this.wishlistPid){
        this.MedicineSer.getMultipleProductInfo(this.wishlistPid).subscribe((data:any)=>{
          this.medicine=data;
        })
      }
       
    }))
  }

}
