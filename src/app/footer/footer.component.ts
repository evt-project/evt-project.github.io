import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public conferences: ConferenceData[] = [
    {
      label: 'DH2016 @ Krakow',
      url: 'assets/posters/DH2016-Krakow.pdf',
      year: 2016,
    },
    {
      label: 'DHBenelux 2015',
      url: 'assets/abstracts/DHBenelux2015-Antwerp_[abstract].pdf',
      year: 2015,
    },
    {
      label: 'DH2014 @ Losanna',
      url: 'assets/posters/DH2014-Losanna.pdf',
      year: 2014,
    },
    {
      label: 'TEI Conf 2013 @ Rome',
      url: 'assets/posters/TEI2013-Roma.pdf',
      year: 2013,
    },
  ];

  public contacts: ContactData[] = [
    {
      label: 'EVT home page',
      url: 'http://evt.labcd.unipi.it/',
    },
    {
      label: 'EVT 1 development repository',
      url: 'https://github.com/evt-project/evt-builder',
    },
    {
      label: 'EVT release page',
      url: 'https://sourceforge.net/projects/evt-project/',
    },
    {
      label: 'EVT 2 development repository',
      url: 'https://github.com/evt-project/evt-viewer',
    },
    {
      label: 'evt.developers@gmail.com',
      url: 'mailto:evt.developers@gmail.com',
    },
  ];
}

interface ConferenceData {
  label: string;
  url: string;
  year: number;
}

interface ContactData {
  label: string;
  url: string;
}
