import { Component, OnInit } from '@angular/core';
import {Router , NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  currentRoute:string='';

  constructor(private router:Router) {
    console.log(this.router.url);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((x:any) => {
      this.currentRoute = x.url;
      this.currentRoute=this.currentRoute.replace('/','');
      console.log(x);
    });
   
   }

  ngOnInit(): void {
  }

}
