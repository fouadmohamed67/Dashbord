import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { RouterModule } from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { LoginComponent } from '../pages/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NavbarComponent } from './bar/navbar/navbar.component'; 
import { SidebarComponent } from './bar/sidebar/sidebar.component';
import { FooterComponent } from './dashbord/footer/footer.component';
import { ItemsComponent } from './dashbord/items/items.component';
import { SliderComponent } from './dashbord/slider/slider.component';
import { ProductsComponent } from '../pages/products/products.component';
import { ProductsCartComponent } from './prodcuts/products-cart/products-cart.component';
import { ProductsStoreComponent } from './prodcuts/products-store/products-store.component';
import { DashbordComponent } from '../pages/dashbord/dashbord.component';
import { register } from 'swiper/element/bundle'; 
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
 
//translate
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader,TranslateModule  } from '@ngx-translate/core'
import { HttpClient } from '@angular/common/http';
export function httpTranslateLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
register();
const components=[
  LoginComponent,
  SignUpComponent,
  NavbarComponent,
  SidebarComponent,
  FooterComponent,
  ItemsComponent,
  SliderComponent,
  ProductsComponent,
  ProductsCartComponent,
  ProductsStoreComponent,
  DashbordComponent  
]
@NgModule({
  declarations: [ 
    ...components
],
  imports: [
    CommonModule, 
    RouterModule ,
    NgxSkeletonLoaderModule,
    
    TranslateModule.forRoot(),
  ],
  exports:[
    ...components
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { 

}
