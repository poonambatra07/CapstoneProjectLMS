import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import {Router , NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Medicine } from 'src/app/model/medicine.model';
import { CartMessageServiceService } from 'src/app/service/cart-message-service.service';
import { CartProductService } from 'src/app/service/cart-product.service';
import { ShareValueService } from 'src/app/service/share-value.service';


@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  currentRoute:string='';
  constructor(private msg: CartMessageServiceService,
    public cartProduct: CartProductService,
    private shareValue:ShareValueService,private router:Router) { 
      console.log(this.router.url);
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((x:any) => {
        this.currentRoute = x.url;
        this.currentRoute=this.currentRoute.replace('/','');
        console.log(x);
      });
    }


  cartItems: Cart[] = [];
  cartTotal = 0;
  cartObject:Array<any>=[];
  UserID:any;


  ngOnInit(): void {
    this.loadCartItems()
    this.handleSubscription();
    this.UserID=localStorage.getItem("userID");
    this.shareValue.setCartTotal(this.cartTotal);
    localStorage.setItem('cartItems',JSON.stringify(this.cartItems));
  }
  handleSubscription() {
    this.msg.getMsg().subscribe((product: any) => {
      this.loadCartItems()
    })

  }

  loadCartItems() {
    if(this.UserID){
      this.cartProduct.getCartItemsUser(this.UserID).subscribe((items: Cart[]) => {
        this.cartItems = items;    
        this.calculateCartTotal();
      })
    }else{
      this.cartProduct.getCartItems().subscribe((items: Cart[]) => {
        this.cartItems = items;    
        this.calculateCartTotal();
      })
    }
   
    
  }

  calculateCartTotal() {
    this.cartTotal = 0;
    this.cartItems && this.cartItems.length > 0 && this.cartItems.forEach(i => {
      let price: any = i.price;
      this.cartTotal = this.cartTotal + (price * i.qty)
      this.cartObject.push(i);
     
    })

    localStorage.setItem('cartItems', JSON.stringify(this.cartObject));
    localStorage.setItem('cartTotal',JSON.stringify(this.cartTotal));
    this.shareValue.setCartTotal(this.cartTotal);
  }


}
