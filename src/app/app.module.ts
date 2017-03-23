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
import { BasicStructurePageComponent } from '../app/shared/basic-structure-page/basic-structure-page.component';
import { HeroSearchComponent }  from '../app/shared/heroSearch/hero-search.component';
import { AboutDetailComponent } from '../app/shared/aboutDetails/about-detail.component';
import { AgenciesDetailComponent } from '../app/shared/agencies-details/agencies-details.component';
import { AssociatesDetailComponent } from '../app/shared/associates-details/associates-detail.component';
import { AboutService }          from '../app/services/aboutService/about.service';
import { PeruGibraltarPage }    from '../app/pages/peru-gibraltar/peru-gibraltar.page';

import { Boxes }                from '../app/types/boxes/boxes';
import { BoxesPanels }          from '../app/types/boxesPanels/boxes-panels';
import { BasicStructurePage }   from '../app/types/basicStructurePage/basic-structure-page';
import { AssociatesService }    from '../app/services/associatesService/associates.services';
import { AgenciesService }      from '../app/services/agenciesService/agencies.service';
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
    AboutDetailComponent,
    AgenciesDetailComponent,
    AssociatesDetailComponent,
    AboutPage,
    AgenciesPage,
    AssociatesPage,
    BoxesComponent,
    BasicStructurePageComponent,
    ContactPage,
    HeroSearchComponent,
    PeruGibraltarPage
  ],
  providers: [ AboutService, AgenciesService, AssociatesService, BoxesService, BoxesPanelService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
