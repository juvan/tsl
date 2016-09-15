import { Routes, RouterModule  } from '@angular/router'; 
import { ModuleWithProviders } from '@angular/core';

import { UsersComponent} from './users/users.component';
import { SettingsComponent} from './settings/settings.component';

export const appRoutes: Routes  = [ 
  { path: 'users', component: UsersComponent },
  { path: "settings", component: SettingsComponent},
  { path: '',  component: UsersComponent}
]; 

export const appRoutingProviders: any[] = [
];

// - Updated Export
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);



 