import { Component, EventEmitter, input, Input, model, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  //  Utilisation de la fonction model 
   search = model<string>('Initial'); 

/** @Output Permet à l'enfant d'envoyer des données ou des événements au parent.:
 *  @Output() searchButtonClick = new EventEmitter()
 **/

  //signal output disponible depuis la version 17.3 d'Angular :
  searchButtonClick = output({alias: 'submit'});

  searchClick(){
    this.searchButtonClick.emit();
  }
  
}
