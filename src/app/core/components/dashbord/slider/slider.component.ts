import { Component } from '@angular/core'; 
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  loaded=false;
  ngAfterViewInit (){ 
    setTimeout(()=>{
      this.loaded=true 
    },2000) 
  
  }
}
