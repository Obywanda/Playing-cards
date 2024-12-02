import { Component, Input } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {

  
  //Le décorateur @Input() permet d'insceret une valeur en entrée
  @Input({
    //parametre input
    //required: true ; 
    //alias:'my-monster' ;
    //transform: (value: Monster) => {value.hp = value.hp /2; return value}
  }
  ) monster: Monster = new Monster()

 }
