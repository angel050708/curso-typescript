import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { PlayersComponent } from './players.component'
import { PlayerDetailComponent } from './player-detail/player-detail.component'

const routes: Routes = [
  { path: '', component: PlayersComponent },
  { path: 'detail', component: PlayerDetailComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class PlayersRoutingModule {}
