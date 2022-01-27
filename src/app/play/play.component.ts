import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['../app.component.css']
})
export class PlayComponent implements OnInit {


  constructor(private cardsrv: CardService, private playersrv: PlayerService) { }

  dealer!: Player;
  Guest!: Player;
  ngOnInit(): void {
    this.playersrv.Start().subscribe({
      next: res => this.dealer = res,
      error: err => console.log(err)
    }) 
  }

}
