import { Component, Input } from '@angular/core';
import { VersionData } from '../../interfaces';

@Component({
  selector: 'app-version-card',
  templateUrl: './version-card.component.html',
  styleUrls: ['./version-card.component.scss'],
})
export class VersionCardComponent {
  @Input() cardData: VersionData;
}
