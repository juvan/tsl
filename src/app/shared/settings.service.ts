import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http'; 
import { Observable }     from 'rxjs/Observable';  
import 'rxjs/Rx';


@Injectable()
export class SettingsService {

   constructor(private http:Http) {
     console.log('SettingsService Service created.', http); 
  }

   getSettings (): Observable<Settings> {
    return this.http.get('/api/settings.json')
                    .map(this.extractData) 
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log ("Settings extract data");
    let body = res.json(); 
    let settings = new Settings(body.price, body.win, body.champion, body.subchampion); 
    console.log (settings);
    return settings; 
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  
 
} // end SettingsService class

export class Settings {
  price:number;
  win:number; 
  champion:number;
  subchampion: number;

  constructor(price:number, win:number, champion:number, subchampion:number) { 
      this.price=price;
      this.win=win; 
      this.champion=champion;
      this.subchampion= subchampion;
    }

}
  