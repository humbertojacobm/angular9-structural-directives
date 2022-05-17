import { Component, OnInit } from '@angular/core';
class Hero{
  name: string;
  emotion: string;
  constructor(){

  }
}
@Component({
  selector: 'app-testing-one-container',
  templateUrl: './testing-one-container.component.html',
  styleUrls: ['./testing-one-container.component.css']
})
export class TestingOneContainerComponent implements OnInit {

  showSad:boolean=true;
  hero:Hero;
  heroes: Array<Hero>;
  constructor() {
    this.heroes = new Array<Hero>();
  }

  ngOnInit() {
    this.heroes.push({
      name: "humberto",
      emotion: "sad"
    });
    this.heroes.push({
      name: "vanessa",
      emotion: "happy"
    });
    this.heroes.push({
      name: "stward",
      emotion: "embarrassed"
    });
  }

  review(){
    console.log(this.hero);
  }

}
