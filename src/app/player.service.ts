import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  baseurl = "http://localhost:3000/api/players";
  constructor(private httpmeth: HttpClient) { }
  Deck():Observable<Player>{
    return this.httpmeth.get(`${this.baseurl}/3`) as Observable<Player>//get deck info
  }
  Table(): Observable<Player>{
    return this.httpmeth.get(`${this.baseurl}/5`) as Observable<Player>//Table info
  }
  updateinfo(id: number):Observable<Player>{
    return this.httpmeth.get(`${this.baseurl}/${id}`) as Observable<Player>
  }
  
}
