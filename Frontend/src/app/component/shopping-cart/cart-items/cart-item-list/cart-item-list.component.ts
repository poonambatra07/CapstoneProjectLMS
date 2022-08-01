import { Component, Input, OnInit } from '@angular/core';
import { Medicine } from 'src/app/model/medicine.model';
import { Cart } from 'src/app/model/cart';
import { CartMessageServiceService } from 'src/app/service/cart-message-service.service';
import { CartProductService } from 'src/app/service/cart-product.service';
import { ShareValueService } from 'src/app/service/share-value.service';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit {

  constructor( 
    private msg: CartMessageServiceService,
    public cartProduct: CartProductService,
    private shareValue:ShareValueService) { }
 @Input()cartItems?:any;

  cartItem: Cart[] = [];
  cartTotal = 0;
  cartObject:Array<any>=[];
  UserID:any;


  
  ngOnInit(): void {
    this.loadCartItems()
    this.handleSubscription();
    this.UserID=localStorage.getItem("userID");
    this.shareValue.setCartTotal(this.cartTotal);
    localStorage.setItem('cartItems',JSON.stringify(this.cartItem));
  }
  handleSubscription() {
    this.msg.getMsg().subscribe((product: any) => {
      this.loadCartItems()
    })

  }

  loadCartItems() {
    if(this.UserID){
      this.cartProduct.getCartItemsUser(this.UserID).subscribe((items: Cart[]) => {
        this.cartItem = items;    
        this.calculateCartTotal();
      })
    }else{
      this.cartProduct.getCartItems().subscribe((items: Cart[]) => {
        this.cartItem = items;    
        this.calculateCartTotal();
      })
    }
   
    
  }

  calculateCartTotal() {
    this.cartTotal = 0;
    this.cartItem && this.cartItem.length > 0 && this.cartItem.forEach(i => {
      let price: any = i.price;
      this.cartTotal = this.cartTotal + (price * i.qty)
      this.cartObject.push(i);
     
    })

    localStorage.setItem('cartItem', JSON.stringify(this.cartObject));
    localStorage.setItem('cartTotal',JSON.stringify(this.cartTotal));
    this.shareValue.setCartTotal(this.cartTotal);
  }

  deleteCart(pid:any){
    this.cartProduct.deleteCartItem(this.UserID,pid).subscribe(result=>{
      console.log(result);
      this.loadCartItems()
      this.handleSubscription();
    });
  }
}
