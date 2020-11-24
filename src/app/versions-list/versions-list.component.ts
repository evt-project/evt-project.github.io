import { Component } from '@angular/core';

import { CardData, CardLink } from '../components/flipping-card/flipping-card.component';

@Component({
  selector: 'app-versions-list',
  templateUrl: './versions-list.component.html',
  styleUrls: ['./versions-list.component.scss'],
})
export class VersionsListComponent {
  evt1: VersionData = {
    enabled: true,
    title: 'EVT 1',
    image: './assets/images/EVT1.png',
    demo: 'http://evt.labcd.unipi.it/demo/evt_v1-3/dotr/',
    download: {
      link: 'https://sourceforge.net/projects/evt-project/files/evt-1.3.zip/download',
      label: 'v 1.3',
      title: 'Download EVT 1.3',
    },
    github: 'https://github.com/evt-project/evt-builder/',
    bugs: 'https://github.com/evt-project/evt-builder/issues',
    links: [],
  };

  evt2: VersionData = {
    enabled: true,
    title: 'EVT 2',
    image: './assets/images/EVT2.png',
    demo: 'http://evt.labcd.unipi.it/demo/evt2-beta2/avicenna/index.html',
    download: {
      link: 'http://evt.labcd.unipi.it/releases/evt2-beta2.zip',
      label: 'v beta2',
      title: 'Download EVT2 beta2',
    },
    github: 'https://github.com/evt-project/evt-viewer/',
    bugs: 'https://github.com/evt-project/evt-viewer/issues',
    links: [],
  };

  evt3: VersionData = {
    enabled: false,
    title: 'EVT 3',
    image: './assets/images/EVT3.png',
    github: 'https://github.com/evt-project/evt-viewer-angular/',
    links: [],
  };

  versions = [this.evt1, this.evt2, this.evt3].filter(e => e.enabled);

  constructor() {
    this.evt1.links = this.getLinks(this.evt1);
    this.evt2.links = this.getLinks(this.evt2);
    this.evt3.links = this.getLinks(this.evt3);
  }

  getLinks(card: VersionData): CardLink[] {
    const links: CardLink[] = [];
    if (card.demo) {
      links.push({
        title: 'Demo',
        url: card.demo,
        label: 'Demo',
      });
    }
    if (card.download?.link) {
      links.push({
        title: card.download.title,
        url: card.download.link,
        icon: ['fas', 'download'],
      });
    }
    if (card.github) {
      links.push({
        title: 'Source code',
        url: card.github,
        icon: ['fab', 'github-square'],
      });
    }
    if (card.bugs) {
      links.push({
        title: 'Report a bug',
        url: card.bugs,
        icon: ['fas', 'bug'],
      });
    }

    return links;
  }
}

interface VersionData extends CardData {
  enabled: boolean;
  demo?: string;
  download?: {
    link: string;
    label: string;
    title: string;
  };
  github?: string;
  bugs?: string;
}
