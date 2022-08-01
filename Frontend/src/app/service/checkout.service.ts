import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckoutBase } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(public http:HttpClient) { }


  addOrder(orderData:any):Observable<any>{
    return this.http.post(CheckoutBase+'/storeOrder',orderData)
  }
  getOrder(orderId:any):Observable<any>{
    return this.http.get(CheckoutBase+'/findOrderById/'+orderId)
  }
  getAllOrder():Observable<any>{
    return this.http.get(CheckoutBase+'/allorder');
  }
  getOrderTotal(){
    return this.http.get(CheckoutBase+'/getTotal');
  }
}
