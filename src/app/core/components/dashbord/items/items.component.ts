import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  st:any|undefined
  arr=new Array(3);
  loaded=false
  constructor(private http:HttpClient){

  }
  ngAfterViewInit (){  
    setTimeout(()=>{
      this.loaded=true 
    },3000) 
  
  }
 /*
   getSt(){
    this.http.get<any>("http://localhost:3000/student").subscribe(res=>{
       this.st=res.students;
      console.log(this.st)
    })
  }
 */


}
