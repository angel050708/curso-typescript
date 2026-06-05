import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptGoogleMapsModule } from '@nativescript/google-maps/angular';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';

@NgModule({
  imports: [NativeScriptCommonModule, MapRoutingModule, NativeScriptGoogleMapsModule],
  declarations: [MapComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MapModule {}
