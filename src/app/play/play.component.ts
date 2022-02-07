import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['../app.component.css']
})
export class PlayComponent implements OnInit {


  constructor(private cardsrv: CardService, private playersrv: PlayerService) { }

  hide: boolean = false;
  deck!: Player;
  dealer!: Player;
  guest!: Player;
  table!: Player; 
  hit: boolean = true;
  ngOnInit(): void { //loads deck into game
    this.hit = true;
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
    this.hit = false;
    this.cardsrv.Draw(this.guest).subscribe({
      next: res => {
        console.log(res)
        this.updategameinfo();},
      error: err => console.log(err)
    });
  }
  updategameinfo(): void{ //refreshes with up to date player info
    let guestid = 1;
    let dealerid = 3;
    this.playersrv.updateinfo(guestid).subscribe({
      next: res => this.guest = res,
      error: err => console.log(err)
    });
    this.playersrv.updateinfo(dealerid).subscribe({
      next: res => this.dealer = res,
      error: err => console.log(err)
    });
  }
  Hit(): void{
    this.cardsrv.Hit(this.dealer).subscribe({
      next: res => {
        this.dealer = res
        this.updatePlayer();},
      error: err => console.log(err)
    });
  }
  updatePlayer(): void{
    this.playersrv.updateinfo(this.guest.id).subscribe({
      next: res => { this.guest = res},
      error: err => console.log(err)
    });
  }
}

