import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userID?:any;
  userData:any;
  showForm:boolean=false;
  constructor(private activateRouter:ActivatedRoute,
    private router:Router,
    private userSer:UserService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(data=>this.userID=data['user']);
    this.userID=localStorage.getItem("userID");
    this.getLoggedInUserInfo();
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("name"); 
    localStorage.removeItem("userID"); 
    this.router.navigate(["login"]);
}
getLoggedInUserInfo(){
  this.userSer.getUser(this.userID).subscribe(data=>{
    if(data){
      this.userData=data;
    }
  })
}
EditClick(){
  this.showForm=!this.showForm;
}
editProfile(editForm:NgForm){
editForm.value._id=this.userID;
this.userSer.updateUser(editForm.value).subscribe(result=>{
  console.log(result)
  if(!result.error && result.msg){
    this.toastr.success("Profile updated Successfully.")
    this.getLoggedInUserInfo();
    this.showForm=!this.showForm;
  }
})
}
}
