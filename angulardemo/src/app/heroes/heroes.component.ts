import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';


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

  constructor() { }

  ngOnInit() {
  }

}
