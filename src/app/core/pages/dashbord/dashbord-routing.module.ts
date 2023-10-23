import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { DashbordComponent } from './dashbord.component';
import { SliderComponent } from '../../components/dashbord/slider/slider.component';
const routes: Routes = [
  {path:'',component:DashbordComponent,children:[
    {path:'slider',component:SliderComponent}
  ]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
