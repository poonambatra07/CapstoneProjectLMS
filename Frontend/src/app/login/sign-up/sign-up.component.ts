import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public userSer:UserService) { }

  ngOnInit(): void {
  }

  registerUser(registerForm:NgForm){
    this.userSer.registerUser(registerForm.value).subscribe(result=>{
      console.log(result);
    })
  }

}
