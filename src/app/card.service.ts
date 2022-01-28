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
}
