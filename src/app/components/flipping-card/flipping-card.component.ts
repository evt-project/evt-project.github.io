import { Component, Input } from '@angular/core';
import device from 'current-device';

@Component({
  selector: 'app-flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.scss'],
})
export class FlippingCardComponent {
  @Input() cardData: CardData;

  isDesktop = device.desktop();
}

export interface CardData {
  title: string;
  image: string;
  links: CardLink[];
}

export interface CardLink {
  title: string;
  url: string;
  label?: string;
  icon?: string[];
}
