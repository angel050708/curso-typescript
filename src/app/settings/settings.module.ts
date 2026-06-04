import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { EditUsernameComponent } from './edit-username/edit-username.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptFormsModule, SettingsRoutingModule],
  declarations: [SettingsComponent, EditUsernameComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SettingsModule {}
