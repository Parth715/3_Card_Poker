import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  baseurl = "http://parpate1.w32.wh-2.com/3_Card_Poker/api/players";
  constructor(private httpmeth: HttpClient) { }
  Deck():Observable<Player>{
    return this.httpmeth.get(`${this.baseurl}/2`) as Observable<Player>//get deck info
  }
  updateinfo(id: number):Observable<Player>{
    return this.httpmeth.get(`${this.baseurl}/${id}`) as Observable<Player>
  }
  
}
