import { HttpClient } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './card';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseurl = "http://localhost:3000/api/cards"
  constructor(private httpmeth: HttpClient) { }
  reset(deck: Player): Observable<Card>{
    return this.httpmeth.put(`${this.baseurl}/reset/${deck}`, deck) as Observable<Card>
  }
  Draw(guest: Player): Observable<Card>{ //assigns 3 cards to player and 3 blanks to table and dealer
    return this.httpmeth.put(`${this.baseurl}/Start`, guest) as Observable<Card>
  }
  Hit(dealer: Player): Observable<Player>{
    return this.httpmeth.put(`${this.baseurl}/check/${dealer}`, dealer) as Observable<Player>
  }
}
