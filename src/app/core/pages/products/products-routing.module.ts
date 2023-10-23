import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ItemsComponent } from '../../components/dashbord/items/items.component';
import { FooterComponent } from '../../components/dashbord/footer/footer.component';
const routes: Routes = [
  {path:'products',component:ProductsComponent,children:[
    {path:'unsold',component:ItemsComponent},
    {path:'sold',component:FooterComponent}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
 