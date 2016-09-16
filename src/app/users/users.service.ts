import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable'; 
import 'rxjs/Rx';

@Injectable()
export class UsersService {
  errorMessage: string;
  private users: User[]; 

  constructor(private http: Http) {
    console.log('UsersService Service created.', http);
  }

  getUsers(): Observable<User[]> {  
    return this.http.get('assets/api/general.json')
      .map(this.extractData)
      .catch(this.handleError); 
  }

  private extractData(res: Response) {  
    let body = res.json();
    let userList = new Array<User>();
    body.forEach((user) => { 
      userList.push(new User(user.id,
        user.teamname,
        user.name,
        user.points,
        user.wins,
        user.photo,
        user.earn,
        user.teamValue));
    });
    return userList.sort((n1, n2) => {
      if (n1.points > n2.points) {
        return -1
      } else if (n2.points > n1.points) {
        return 1
      } else {
        return 0
      }
    });
  }
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

} // end UserService class

export class User {
  id: string;
  name: string;
  slug: string;
  points: number;
  wins: number;
  avatar: string;
  earn: number;
  value: number;

  constructor(id: string,
    name: string,
    slug: string,
    points: number,
    wins: number,
    avatar: string,
    earn: number,
    value: number
  ) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.points = points;
    this.wins = wins;
    this.avatar = avatar;
    this.earn = earn;
    this.value = value;
  }

}