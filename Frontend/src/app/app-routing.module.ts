import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddProductComponent } from './Admin/dasboard/add-product/add-product.component';
import { DasboardComponent } from './Admin/dasboard/dasboard.component';
import { OrderdataComponent } from './Admin/dasboard/orderdata/orderdata.component';
import { UserComponent } from './Admin/dasboard/user/user.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ProductdetailComponent } from './component/shopping-cart/productlist/productdetail/productdetail.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyauthGuard } from './guard/myauth.guard';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { MyorderComponent } from './User/myorder/myorder.component';
import { OrderDetailsComponent } from './User/order-details/order-details.component';
import { ProfileComponent } from './User/profile/profile.component';
import { CommonModule } from '@angular/common';
import { OrderdetailsComponent } from './Admin/dasboard/orderdata/orderdetails/orderdetails.component';
import { ReportsComponent } from './Admin/dasboard/reports/reports.component';
import { WishlistComponent } from './User/wishlist/wishlist.component';

const routes: Routes = [
  {path:"about-us",component:AboutUsComponent},
  {path:"login", component:SignInComponent},
  {path:"sign-up", component:SignUpComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"dashboard",component:DasboardComponent},
  {path:"",component:ShoppingCartComponent},
  {path:"add-product",component:AddProductComponent},
  {path:"users",component:UserComponent},
  {path:"profile",component:ProfileComponent,canActivate:[MyauthGuard]},
  {path:"checkout",component:CheckoutComponent},
  {path:"thankyou",component:ThankYouComponent},
  {path:"myorder",component:MyorderComponent},
  {path:"orderDetails/:orderid",component:OrderDetailsComponent},
  {path:"product-details/:productId",component:ProductdetailComponent},
  {path:"orders", component:OrderdataComponent},
  {path:"orderInfo/:orderid",component:OrderdetailsComponent},
  {path:"reports",component:ReportsComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"**",component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
