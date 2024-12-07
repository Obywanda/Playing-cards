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
  @Input() monster = new Monster();
  monsterTypeIcon: string ="/img/electric.png";
  backgroundColor: string = "rgb(255, 255, 104)";

 }
