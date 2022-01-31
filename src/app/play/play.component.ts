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

  deck!: Player;
  dealer!: Player;
  guest!: Player;
  table!: Player; 
  drawn!: boolean;
  ngOnInit(): void { //loads deck into game
    this.drawn = true
    this.playersrv.Deck().subscribe({
      next: res => {
        this.deck = res
        this.reset();},
      error: err => console.log(err)
    });
  }
  reset(): void{ //all cards foreign key points to deck
    this.cardsrv.reset(this.deck).subscribe({
      next: res => {
        console.log(res)
        this.updategameinfo();},
      error: err => console.log(err)
    })
  }
  Draw(): void{
    this.drawn = false;
    this.cardsrv.Draw(this.guest).subscribe({
      next: res => {
        console.log(res)
        this.updategameinfo();},
      error: err => console.log(err)
    });
  }
  updategameinfo(): void{ //refreshes with up to date player info
    let guestid = 1;
    let dealerid = 4;
    let tableid = 5;
    this.playersrv.updateinfo(guestid).subscribe({
      next: res => this.guest = res,
      error: err => console.log(err)
    });
    this.playersrv.updateinfo(dealerid).subscribe({
      next: res => this.dealer = res,
      error: err => console.log(err)
    });
    this.playersrv.updateinfo(tableid).subscribe({
      next: res => this.table = res,
      error: err => console.log(err)
    });
  }
  Hit(): void{
    
  }
}
