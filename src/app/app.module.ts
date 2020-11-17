import { NoopAnimationPlayer } from '@angular/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlippingCardComponent } from './components/flipping-card/flipping-card.component';
import { FooterComponent } from './footer/footer.component';
import { VersionsListComponent } from './versions-list/versions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FlippingCardComponent,
    FooterComponent,
    VersionsListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonsModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(
    library: FaIconLibrary,
  ) {
    library.addIconPacks(fas);
    library.addIconPacks(fab);
  }
}
