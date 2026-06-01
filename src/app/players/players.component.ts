import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, isAndroid } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'
import { PlayersService } from './players.service'

@Component({
  selector: 'Players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  players: { id: number; name: string }[] = []
  platformMessage = ''

  constructor(
    private routerExtensions: RouterExtensions,
    private playersService: PlayersService
  ) {}

  ngOnInit(): void {
    this.players = this.playersService.getPlayers()

    if (isAndroid) {
      this.platformMessage = 'Ejecutando en Android'
    }
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onGoToDetail(): void {
    this.routerExtensions.navigate(['/players/detail'])
  }
}
