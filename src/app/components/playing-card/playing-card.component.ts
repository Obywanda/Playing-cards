
import { Component, computed, Input, input, InputSignal, OnChanges, SimpleChanges } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterTypeProperties } from '../../utils/monster.utils';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent{
 
 

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

  monster = input(new Monster());
  monsterTypeIcon = computed(()=> {
    return MonsterTypeProperties[this.monster().type].imageUrl
  }) 
  backgroundColor = computed(()=> {
    return MonsterTypeProperties[this.monster().type].color
  })

 

 


 }
