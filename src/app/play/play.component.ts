import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
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

  deck!: Player;
  dealer!: Player;
  Guest!: Player;
  ngOnInit(): void {
    this.playersrv.Start().subscribe({
      next: res => this.deck = res,
      error: err => console.log(err)
    });
    this.updateplayerinfo();
  }
  reset(): void{
    this.cardsrv.reset(this.deck).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    })
  }
  updateplayerinfo(): void{
    let guestid = this.Guest.id;
    let dealerid = this.dealer.id;
    this.playersrv.updateinfo(guestid).subscribe({
      next: res => this.Guest = res,
      error: err => console.log(err)
    });
    this.playersrv.updateinfo(dealerid).subscribe({
      next: res => this.dealer = res,
      error: err => console.log(err)
    });
  }
}
