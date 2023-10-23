import { Component } from '@angular/core';
import { TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private translateService:TranslateService){
    this.translateService.use('en')
  }

  translate(event:any){
    this.translateService.use(event.target.value)
  }
}
