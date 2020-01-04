import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {Observable, observable, of} from "rxjs";
import {MessagesService} from "./messages.service";
import {HttpClient,HttpHeaders} from "@angular/common/http";

//HeroService 可以从任何地方获取数据：Web 服务、本地存储（LocalStorage）或一个模拟的数据源。

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http:HttpClient,
    private messagesService:MessagesService) { }

  /*getHeroes(): Hero[]{
    return HEROES;
  }*/
  //Observable 是 RxJS中的一个关键类
  getHeroes():Observable<Hero[]>{
    /*this.messagesService.add("HeroService: fetched heroes");
    return of(HEROES);*/
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  private heroesUrl = 'api/hereos';

  private log(message: string){
    this.messagesService.add('HeroService: ${message}')
  }


}
