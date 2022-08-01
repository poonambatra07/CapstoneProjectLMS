import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users?:Array<any>
  constructor(private userSer:UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }
  

  getAllUser(){
    this.userSer.getAllUSers().subscribe(items=>{
      this.users=items;
      console.log(this.users)
    })
  }

}
