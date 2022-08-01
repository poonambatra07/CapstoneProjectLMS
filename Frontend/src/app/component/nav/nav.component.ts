import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private router:Router) { }

  user:boolean=false;
  ngOnInit(): void {
    this.getUserStatus();
  }
  getUserStatus(){
    if(localStorage.getItem('userID') && localStorage.getItem('token')){
      this.user=true;
    }
  }
  logoutUser(){
    localStorage.removeItem("token");
    localStorage.removeItem("name"); 
    localStorage.removeItem("userID"); 
    this.user=false;
    this.router.navigate(["login"]);
  }

}
