
import { Component, Input, input, InputSignal, OnChanges, SimpleChanges } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterTypeProperties } from '../../utils/monster.utils';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['monster']){
      if(changes['monster'].previousValue?.type != changes['monster'].currentValue.type){
        this.monsterTypeIcon = MonsterTypeProperties[this.monster.type].imageUrl;
        this.backgroundColor = MonsterTypeProperties[this.monster.type].color;
      }
    }
  }
 

  // //Le décorateur @Input() permet d'insceret une valeur en entrée
  // //@Input() monster: Monster = new Monster()

  // //Signal input
  // monster: InputSignal<Monster> = input(new Monster(), {
    
  //   // --- Option input ---
    
  //   // alias: 'My-monster',
  //   // transform: (value: Monster) => {
  //   //   value.hp = value.hp / 2;
  //   //   return value
  //   // }
  // });

  @Input() monster = new Monster();
  monsterTypeIcon: string = "/img/electric.png";
  backgroundColor: string = "rgb(255, 255, 104)";

  

 


 }
