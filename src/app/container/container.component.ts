import {
  Component,
  Input 
} from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

/**
 * This class represents the container component.
 */
@Component({
  selector: 'app-container',
  templateUrl: 'container.component.html',
  styleUrls: ['container.component.css']  
})
export class ContainerComponent { 

  @Input() public title: string;
  @Input() public navOptions: Array<SideNavOption>;

  constructor() {
    console.log('ContainerComponent created.'); 
  }
 
}

/**
 * A side bar navigation option
 */
export class SideNavOption {
  public name: string;
  public icon: string;
  public link: string;

  constructor(name, icon, link) {
    this.name = name;
    this.icon = icon;
    this.link = link;
  }
}