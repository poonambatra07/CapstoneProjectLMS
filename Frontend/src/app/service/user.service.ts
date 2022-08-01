import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckoutBase,UserUrl,userUrllogin,userUrlregister ,AllUsersUrl,UsersUrl,UpdateUsersUrl,UpdateUserBalanceUrl} from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  loginUser(user:any):Observable<any>{
   return this.http.post(userUrllogin,user)
  }
  registerUser(user:any):Observable<any>{
    return this.http.post(userUrlregister,user)
  }
  getAllUSers():Observable<any>{
    return this.http.get(AllUsersUrl); 
  }
  getUser(userId:any):Observable<any>{
    return this.http.get(UsersUrl+'/'+userId)
  }
  updateUser(userData:any):Observable<any>{
    return this.http.put(UpdateUsersUrl,userData);
  }
  updateUserBalance(userData:any){
    return this.http.put(UpdateUserBalanceUrl,userData);
  }
  getUserOrderDetails(userId:any){
    return this.http.get(CheckoutBase+'/getUserOrder/'+userId);
  }
  getUserTotal(){
    return this.http.get(UserUrl+'/getTotal');
  }
}
