import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name:string;
  title = 'Testing WAI-ARIA Label';
  ariaLabel = "How are you?";
  Hidden = false;
  
  constructor() {
    this.name = 'Angular 4'
  }
  
  public changeAria(){ 
    this.ariaLabel = "Good, How about you?";
  }
}
