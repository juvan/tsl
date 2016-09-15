import {
  Component,
  Input,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import {UsersService} from './users.service';
import {User} from './users.service';
 

@Component({ 
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
   animations: [
        trigger('itemState', [
            state('visible', style({ 'opacity': '1', transform: 'translateX(0)'})),
            transition('void => *', [
                style({ 'opacity': '0', transform: 'translateX(-100%)' }),
                animate('2s ease-out')
            ])
        ])
    ]
})

export class UsersComponent  implements OnInit {
  errorMessage: string;
  mode = 'Observable';
  private users: User[]; 

  constructor(private usersService: UsersService) {
    console.log ('Usercomponent constructor'); 
    this.users = [];
  }
  
  ngOnInit() {  
     console.log ("User component init");
     this.getUsers();
  }

  getUsers() {
   console.log ('Usercomponent getUsers'); 
    this.usersService.getUsers()
      .subscribe(
      users => this.users = users,
      error => this.errorMessage = <any>error); 
      console.log (this.users);
  }
}
