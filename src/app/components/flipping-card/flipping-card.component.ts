import { Component, Input } from '@angular/core';
import { CardData } from 'src/app/interfaces';

@Component({
  selector: 'app-flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.scss'],
})
export class FlippingCardComponent {
  @Input() cardData: CardData;
}
