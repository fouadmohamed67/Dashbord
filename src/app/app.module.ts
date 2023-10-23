import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
//translate
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader,TranslateModule  } from '@ngx-translate/core'
import { HttpClient,HttpClientModule } from '@angular/common/http';
//skeltone
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
//modules
import { LoginModule } from './core/pages/login/login.module';
import { DashbordModule } from './core/pages/dashbord/dashbord.module';
import { ProductsModule } from './core/pages/products/products.module';

//Components Module
import { ComponentsModule } from './core/components/components.module';

import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
   

import { register } from 'swiper/element/bundle'; 
import { RouterModule } from '@angular/router'; 

// register Swiper custom elements
register();

export function httpTranslateLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [     
    ComponentsModule,  
    ProductsModule,
    LoginModule,
    DashbordModule,  
    NgxSkeletonLoaderModule,
    BrowserModule,
    HttpClientModule, 
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:httpTranslateLoaderFactory,
        deps:[HttpClient]
      }
    }), 
    AppRoutingModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
