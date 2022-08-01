import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart';
import { cartUrl } from '../config/api';
import { HttpClient } from '@angular/common/http';
import { Medicine } from '../model/medicine.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartProductService {

  constructor(public http:HttpClient) { }

  getCartItems(): Observable<Cart[]>{
    //TODO: mapping obtained result to cart model properties
    return this.http.get<Cart[]>(cartUrl+'/getCartData').pipe(
      map((result:any[])=>{
        let cartItems:Cart[]=[];
        for(let item of result){
            let productExist=0;
            for(let i in cartItems){
            if(cartItems[i].productId==item._id){
            cartItems[i].qty++;
            productExist=1;
            break;
            }
            }

            if(!productExist){
              cartItems.push( new Cart(item._id,item._id,item.qty,item.price,item.name,item))
           /* cartItems.push({
            productId:item._id,
            _id:item._id,
            qty:item.qty,
            price:item.price,
            productName:item.name
            })*/

            }
        }
      

        return cartItems;
      })
    );
  }

  getCartItemsUser(userId:any): Observable<Cart[]>{
    //TODO: mapping obtained result to cart model properties
    return this.http.get<Cart[]>(cartUrl+'/getCartData').pipe(
      map((result:any[])=>{
        let cartItems:Cart[]=[];
        for(let item of result){
            let productExist=0;
            for(let i in cartItems){
            if(cartItems[i].productId==item._id){
            cartItems[i].qty++;
            productExist=1;
            break;
            }
            }

            if(!productExist){
              cartItems.push( new Cart(item._id,item._id,item.qty,item.price,item.name,item))
            }
        }
      

        return cartItems;
      })
    );
  }
  addProductToCart(medicine:any):Observable<any>{
      let cartItems={
        productId:medicine._id,
        _id:medicine._id,
        qty:1,
        price:medicine.price,
        name:medicine.name,
        userId:medicine.userId
        }
  
    return this.http.post(cartUrl+'/addToCart',cartItems);
  }

  deleteUSerCart(userId:any):Observable<any>{
    return this.http.delete(cartUrl+'/deleteUserCart/'+userId);
  }
  deleteCartItem(userId:any,pid:any):Observable<any>{
    return this.http.delete(cartUrl+'/deleteCartItem/'+userId+'/'+pid);
  }
}
