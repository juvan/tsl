import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http'; 

// Material 2 
import { MdCoreModule } from '@angular2-material/core'
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdRadioModule } from '@angular2-material/radio';
import { MdCheckboxModule } from '@angular2-material/checkbox'
import { MdTooltipModule } from '@angular2-material/tooltip';
import { MdSliderModule } from '@angular2-material/slider';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdIconModule,  MdIconRegistry } from '@angular2-material/icon';
import {MdToolbarModule} from '@angular2-material/toolbar'; 
import {MdGridListModule} from '@angular2-material/grid-list/grid-list';
import {MdListModule} from '@angular2-material/list/list'; 

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routes'; 
import { ContainerComponent} from './container/container.component';
import { UsersComponent} from './users/users.component'; 
import {UsersService} from './users/users.service';
import { SettingsComponent } from './settings/settings.component'; 

//Services
import {SettingsService} from './shared/index';
 

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    UsersComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    MdCoreModule, MdCardModule, MdButtonModule, MdRadioModule,  
    MdCheckboxModule, MdTooltipModule, MdSliderModule,  MdIconModule, MdSidenavModule,MdToolbarModule,MdGridListModule,MdListModule
  ], 
  providers: [ appRoutingProviders, UsersService, MdIconRegistry, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {

 constructor(mdIconRegistry: MdIconRegistry) {
   mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
 }

}
