import { MonsterType } from './utils/monster.utils';
import { Component } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MonsterType } from './utils/monster.utils';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PlayingCardComponent, SearchBarComponent],
})
export class AppComponent {

  monsters!: Monster[];
  count: number = 0;
  search = "";

  selectedMonsterIndex = 0;

  selectedMonsterIndex = 0;

  constructor() {
    this.monsters = [];

    const monster1 = new Monster();
    monster1.name = "Pik";
    monster1.image = "/img/pik.png";
    monster1.type = MonsterType.ELECTRIC;
    monster1.hp = 40;
    monster1.figureCaption ="N°002 Pik";
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = "Car";
    monster2.image = "/img/car.png";
    monster2.type = MonsterType.WATER;
    monster2.hp = 60;
    monster2.figureCaption ="N°003 Car";
    this.monsters.push(monster2);
  }

  increaseCount() {
    this.count++;
  }

  toggleMonster(){
    this.selectedMonsterIndex = (this.selectedMonsterIndex + 1) % this.monsters.length
  }
}
