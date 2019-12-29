import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from "../mock-heroes";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

 /* 添加一个属性*/
  hero:Hero={
    id:1,
    name:"windstorm"
  }

  //heroes = HEROES;
  heroes = [];

  selectedHero: Hero;

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }


  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes()
  }

}
