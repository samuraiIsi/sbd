import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './data/in-memory-data/in-memory-data.service';
import { DataBoxesService }     from './data/data-boxes/data-boxes.service';

import { AppComponent }         from './app.component';
import { HomePage }             from '../app/pages/home/home.page';
import { AboutPage }            from '../app/pages/about/about.page';
import { AgenciesPage }         from '../app/pages/agencies/agencies.page';
import { AssociatesPage }       from '../app/pages/associates/associates.page';
import { ContactPage }          from '../app/pages/contact/contact.page';
import { BoxesComponent }       from '../app/shared/boxes/boxes.component';
import { HeroSearchComponent }  from '../app/shared/heroSearch/hero-search.component';
import { HeroDetailComponent }  from '../app/shared/heroDetails/hero-detail.component';
import { HeroService }          from '../app/services/heroService/hero.service';
import { PeruGibraltarPage }    from '../app/pages/peru-gibraltar/peru-gibraltar.page';

import { Boxes }                from '../app/types/boxes/boxes';
import { BoxesPanels }          from '../app/types/boxesPanels/boxes-panels';
import { BoxesService }         from '../app/services/boxesService/boxes.service';
import { BoxesPanelService }    from '../app/services/boxesPanelService/boxesPanelService.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomePage,
    HeroDetailComponent,
    AboutPage,
    AgenciesPage,
    AssociatesPage,
    BoxesComponent,
    ContactPage,
    HeroSearchComponent,
    PeruGibraltarPage
  ],
  providers: [ HeroService, BoxesService, BoxesPanelService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
