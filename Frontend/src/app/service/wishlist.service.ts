import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { wishlistUrl } from 'src/app/config/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(public http:HttpClient) { }

  getalldata(){
    return this.http.get(wishlistUrl).pipe(
      map((result:any)=>{
        let productId:any=[];
        result.forEach((item:any)=> item.productId!==undefined?productId.push(item.productId):'')
        return productId;
      })
    )
  }
  addProducttoWishlist(productId:any,userId:any):Observable<any>{
    return this.http.post(wishlistUrl,{userId:userId,productId:productId,id:productId});
  }

  removeProductfromWishlist(productId:any):Observable<any>{
    return this.http.delete(wishlistUrl+'/'+productId);
  }

  getalldataUser(userId:any){
    return this.http.get(wishlistUrl).pipe(
      map((result:any)=>{
        let productId:any=[];
        result.forEach((item:any)=> item.productId!==undefined && item.userId==userId ?productId.push(item.productId):'')
        return productId;
      })
    )
  }
}
