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
import { SettingsService, Settings} from '../shared/index';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.scss'],
   animations: [
        trigger('itemState', [
            state('visible', style({ 'opacity': '1' })),
            transition('void => *', [
                style({ 'opacity': '0' }),
                animate('2s ease-out')
            ])
        ])
    ] 
})
export class SettingsComponent implements OnInit {

 errorMessage: string;
  mode = 'Observable';
  private settings: Settings;

  constructor(private settingsService: SettingsService) {
    console.log ('settings component constructor'); 
    this.settings = new Settings (0,0,0,0);
  }
  
  ngOnInit() { 
    console.log ('settings component init'); 
    this.getSettings(); 
    console.log (this.settings.price);
  }

  getSettings() {
   console.log ('settings getSettings'); 
    this.settingsService.getSettings()
      .subscribe(
      settings => this.settings = settings,
      error => this.errorMessage = <any>error);

      console.log (this.settings);
  }
 
  
}
