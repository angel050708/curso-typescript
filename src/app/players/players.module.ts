import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { PlayersRoutingModule } from './players-routing.module'
import { PlayersComponent } from './players.component'
import { PlayerDetailComponent } from './player-detail/player-detail.component'

@NgModule({
  imports: [NativeScriptCommonModule, PlayersRoutingModule],
  declarations: [PlayersComponent, PlayerDetailComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PlayersModule {}
