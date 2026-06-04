import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule, NativeScriptHttpClientModule } from '@nativescript/angular';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersService } from './players/players.service';
import { readNowReducer } from './store/read-now.reducer';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    NativeScriptModule,
    NativeScriptUISideDrawerModule,
    NativeScriptHttpClientModule,
    StoreModule.forRoot({ readNow: readNowReducer }),
  ],
  declarations: [AppComponent],
  providers: [PlayersService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
