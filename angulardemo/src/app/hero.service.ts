import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {Observable, of} from "rxjs";
import {MessagesService} from "./messages.service";
import {HttpClient, HttpHeaders,} from "@angular/common/http";
import {catchError,map,tap} from "rxjs/internal/operators";


//HeroService 可以从任何地方获取英雄的数据：Web 服务、本地存储（LocalStorage）或一个模拟的数据源。

@Injectable({
  providedIn: 'root'
})
export class HeroService {




  constructor(
    private http:HttpClient,
    private messagesService:MessagesService) { }


  private heroesUrl = 'api/heroes';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

    //获取某一个英雄的详细信息
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap(_=>this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id = ${id}`))
      );
  }


  //获取所有英雄
  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError<Hero[]>('getHeroes',[]))
      )
  }


  updateHero(hero:Hero):Observable<any>{
    return this.http.put(this.heroesUrl,hero,this.httpOptions).pipe(
      tap(_=>this.log(`updated hero id = ${hero.id}`)),
      catchError(this.handleError<any>(`updateHero`))
    )
  }


  //新增一个方法
  addHero(hero: Hero):Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl,hero,this.httpOptions).pipe(
      tap(newHero:Hero)=>this.log(`added hero w/ id=${newHero.id}`),
      catchError(this.handleError<Hero>(`addHero`))
    )
  }



  private log(message: string){
    this.messagesService.add('HeroService: ${message}')
  }


  private handleError<T>(operation = 'operation',result?:T){
    return (error:any):Observable<T> =>{
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

}
