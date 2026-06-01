import { Injectable } from '@angular/core'

@Injectable()
export class PlayersService {
  private players = [
    { id: 1, name: 'Lionel Messi' },
    { id: 2, name: 'Cristiano Ronaldo' },
    { id: 3, name: 'Kylian Mbappé' },
    { id: 4, name: 'Erling Haaland' },
  ]

  getPlayers() {
    return this.players
  }
}
