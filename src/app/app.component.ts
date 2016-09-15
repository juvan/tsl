import { Component } from '@angular/core';
import { SideNavOption} from './container/index';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  navOptions: Array<SideNavOption>;  
   
  constructor() { 
      console.log('AppComponent created.'); 
      let rank = new SideNavOption('Ranking', 'fa-list-ol', '/users');
      let settings = new SideNavOption('Premios', 'fa-gamepad', '/settings');
      this.navOptions = [rank,settings]; 
    } 
}
