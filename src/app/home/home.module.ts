import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptUIPullToRefreshModule } from '@nativescript-community/ui-pulltorefresh/angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule,
    NativeScriptUIPullToRefreshModule,
  ],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
