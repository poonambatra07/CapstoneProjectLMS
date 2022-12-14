import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyauthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){
        if(localStorage.getItem("token")){
        return true;
        }else {
        this.router.navigate(["login"]);
        return false;
        }
  }
  
  
}
