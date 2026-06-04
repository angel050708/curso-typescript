import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { SettingsComponent } from './settings.component';
import { EditUsernameComponent } from './edit-username/edit-username.component';

const routes: Routes = [
  { path: '', component: SettingsComponent },
  { path: 'edit-username', component: EditUsernameComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class SettingsRoutingModule {}
