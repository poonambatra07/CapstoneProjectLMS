import { Component, Input, OnInit } from '@angular/core';
import { Medicine } from 'src/app/model/medicine.model';
import { CartMessageServiceService } from 'src/app/service/cart-message-service.service';
import { CartProductService } from 'src/app/service/cart-product.service';
import { WishlistService } from 'src/app/service/wishlist.service';




@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  @Input() product?:any
  @Input() title?:string;
  @Input() wishlistFlag?:boolean;
  userId:any;

  constructor(public msg:CartMessageServiceService,
    public cartItems:CartProductService,
    public wishlist:WishlistService){ }

  ngOnInit(): void {
    this.userId=localStorage.getItem('userID') || '';
  }

  handleAddtoCart(){
    this.product.userId=this.userId;
    this.cartItems.addProductToCart(this.product).subscribe(()=>{
       this.msg.sendMsg(this.product);
    })
  
  }
  
  addProducttowishlist(productId:any){
    this.wishlist.addProducttoWishlist(productId, this.userId).subscribe(()=>{
    })
    this.wishlistFlag=true;
  }
  removeProductFromwishlist(productId:any){
    this.wishlistFlag=false;
    this.wishlist.removeProductfromWishlist(productId).subscribe(()=>{
    });
  }
}
