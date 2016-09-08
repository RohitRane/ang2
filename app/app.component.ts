import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
  `

})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  myHero = {'id':1, 'name':'Windstorm'};
heroes = [];
heroesDb = [
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')];

    ngOnInit(){
        let i = 0;
        this.heroes.push(new Hero(1,'Windstorm'));
        setInterval(()=>{
            i++;
            this.heroes.push(this.heroesDb[i%3]);
        },2000);
    }
}
