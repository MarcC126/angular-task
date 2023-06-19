import { Component } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private cardService: CardService){
    this.cardService.getDataToCards();
  }

  get cardInfo(){
    return this.cardService.data;
  }
}
