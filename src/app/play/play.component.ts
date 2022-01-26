import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['../app.component.css']
})
export class PlayComponent implements OnInit {

  
  constructor(private cardsrv: CardService) { }

  ngOnInit(): void {

  }

}
