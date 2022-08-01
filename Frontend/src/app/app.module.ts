import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavComponent } from './component/nav/nav.component';
import { FiltersComponent } from './component/shopping-cart/filters/filters.component';
import { ProductlistComponent } from './component/shopping-cart/productlist/productlist.component';
import { CartItemsComponent } from './component/shopping-cart/cart-items/cart-items.component';
import { CartItemListComponent } from './component/shopping-cart/cart-items/cart-item-list/cart-item-list.component';
import { ProductItemsComponent } from './component/shopping-cart/productlist/product-items/product-items.component';
import { HttpClientModule } from '@angular/common/http';
import { DasboardComponent } from './Admin/dasboard/dasboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './User/profile/profile.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule } from 'ngx-toastr';
import { AddProductComponent } from './Admin/dasboard/add-product/add-product.component';
import { UserComponent } from './Admin/dasboard/user/user.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyorderComponent } from './User/myorder/myorder.component';
import { OrderDetailsComponent } from './User/order-details/order-details.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { OrderdataComponent } from './Admin/dasboard/orderdata/orderdata.component';
import { OrderdetailsComponent } from './Admin/dasboard/orderdata/orderdetails/orderdetails.component';
import { ReportsComponent } from './Admin/dasboard/reports/reports.component';
import { WishlistComponent } from './User/wishlist/wishlist.component';


 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingCartComponent,
    FooterComponent,
    NavComponent,
    FiltersComponent,
    ProductlistComponent,
    CartItemsComponent,
    CartItemListComponent,
    ProductItemsComponent,
    DasboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProfileComponent,
    SignUpComponent,
    SignInComponent,
    AddProductComponent,
    UserComponent,
    CheckoutComponent,
    ThankYouComponent,
    NotFoundComponent,
    MyorderComponent,
    OrderDetailsComponent,
    BreadcrumbComponent,
    OrderdataComponent,
    OrderdetailsComponent,
    ReportsComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
