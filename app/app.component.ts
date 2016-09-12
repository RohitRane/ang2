import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'my-app',
    template: `
    <input type="text" #tbx (keyup.enter)="tbxKeyUp($event)" /> - {{tbx.value}} <button  (click)="addHero(tbx.value)">Add</button> <br/> 
    <button #btn (click) = "stopAdding($event)">Stop Exec</button>
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
        this.intvl = setInterval(()=>{
            i++;
            this.heroes.push(this.heroesDb[i%this.heroesDb.length]);
        },2000);
    }

    stopAdding($event){
      debugger;
      clearInterval(this.intvl);
    }

    tbxKeyUp(evt){
      debugger;
    }

    addHero(hero){
        debugger;
        this.heroesDb.push(new Hero(Math.round(Math.random()*100), hero));
    }
}
