import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartMessageServiceService {

  subject=new Subject();
  constructor() { }

  sendMsg(product:any){
    
    this.subject.next(product);// product item component will trigger this method and pass product to itself on add to cart click
  }
  getMsg(){
    return this.subject.asObservable();

  }
}
