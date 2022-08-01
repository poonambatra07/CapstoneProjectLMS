import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareValueService {

  constructor() { }
userId:Number=0;
total:Number=0;

  setValue(userId:any){
    this.userId=userId;
  }
  getArray(){
    return this.userId;
  }
  setCartTotal(total:any){
    this.total=total;
  }
  getCartTotal(){
    return this.total;
  }
}
