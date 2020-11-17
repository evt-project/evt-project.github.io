import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import device from 'current-device';

@Component({
  selector: 'app-flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state(
        'default',
        style({
          transform: 'none',
        }),
      ),
      state(
        'flipped',
        style({
          transform: 'rotateY(180deg)',
        }),
      ),
      state(
        'matched',
        style({
          visibility: 'false',
          transform: 'scale(0.05)',
          opacity: 0,
        }),
      ),
      transition('default => flipped', [animate('400ms')]),
      transition('flipped => default', [animate('400ms')]),
      transition('* => matched', [animate('400ms')]),
    ]),
  ],
})
export class FlippingCardComponent {
  @Input() cardData: CardData;

  isDesktop = device.desktop();

  cardClicked() {
    if (!this.isDesktop && this.cardData.state !== 'flipped') {
      this.toggleCard();
    }
  }

  cardHovered() {
    if (this.isDesktop) {
      this.toggleCard();
    }
  }

  toggleCard() {
    if (this.cardData.state === 'default') {
      this.cardData.state = 'flipped';
    } else {
      this.cardData.state = 'default';
    }
  }
}

export interface CardData {
  title: string;
  image: string;
  state: 'default' | 'flipped' | 'matched';
  links: CardLink[];
}

export interface CardLink {
  title: string;
  url: string;
  label?: string;
  icon?: string[];
}
