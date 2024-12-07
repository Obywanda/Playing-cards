import { MonsterType } from './utils/monster.utils';
import { Component } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PlayingCardComponent, SearchBarComponent],
})
export class AppComponent {

  //Liste de monstre
  monsters!: Monster[];
  count: number = 0;
  search = "";

  selectedMonsterIndex = 0;

  constructor() {
    //initialisation des monstre a un tableau vide
    this.monsters = [];

    const monster1 = new Monster();
    monster1.name = "Pik";
    monster1.hp = 40;
    monster1.figureCaption ="N°002 Pik";
    //Envoi le monstre a la liste de monstre 
    this.monsters.push(monster1);

    //Deuxieme monstre 
    const monster2 = new Monster();
    monster2.name = "Car";
    monster2.image = "/img/car.png";
    monster2.type = MonsterType.WATER;
    monster2.hp = 60;
    monster2.figureCaption ="N°003 Car";
    //Envoi le monstre a la liste de monstre 
    this.monsters.push(monster2)
  }

  increaseCount() {
    this.count++;
  }

  // toggleMonster prend une liste de monstre 
  toggleMonster() {
    this.selectedMonsterIndex =(this.selectedMonsterIndex + 1) % this.monsters.length
  }

}
