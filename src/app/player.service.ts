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
  Start():Observable<Player>{
    return this.httpmeth.get(`${this.baseurl}/3`) as Observable<Player>
  }
  Draw():Observable<Player>{
    return this.httpmeth.get(`${this.baseurl}/1`) as Observable<Player>
  }
  updateinfo(id: number):Observable<Player>{
    return this.httpmeth.get(`${this.baseurl}/${id}`) as Observable<Player>
  }
  
}
