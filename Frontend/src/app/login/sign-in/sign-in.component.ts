import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  msg:string="";
  user:boolean=false;
  constructor(public userSer:UserService,
    private router:Router) { }

  ngOnInit(): void {
    
  }

  checkUser(loginRef:NgForm):void{
    this.userSer.loginUser(loginRef.value).subscribe(msg=>{;
      if(!msg.error){
        localStorage.setItem("token",msg.token);
        localStorage.setItem("name",msg.name); 
        localStorage.setItem("userID",msg.user); 
        this.user=true;
       // window.location.reload();
         this.router.navigate(["profile"]);//profile component 
         
      }
    })
    // let loginRefValues=loginRef.value;
    // console.log(loginRefValues);
    // if(loginRefValues.user=="poonam" && loginRefValues.pass=="123"){
    //   this.msg="Login successfull";
    // }else{
    //   this.msg="Login Fail try again";
    // }
  //  loginRef.reset();
  }
}
