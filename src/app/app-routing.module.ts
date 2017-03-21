import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage }   			    from '../app/pages/home/home.page';
import { AboutPage }      		  from '../app/pages/about/about.page';
import { AgenciesPage }			    from '../app/pages/agencies/agencies.page';
import { AssociatesPage }		    from '../app/pages/associates/associates.page';
import { ContactPage }			    from '../app/pages/contact/contact.page';
import { AboutDetailComponent } from '../app/shared/aboutDetails/about-detail.component';
import { AgenciesDetailComponent } from '../app/shared/agencies-details/agencies-details.component';
import { AssociatesDetailComponent } from '../app/shared/associates-details/associates-detail.component';
import { PeruGibraltarPage }    from '../app/pages/peru-gibraltar/peru-gibraltar.page';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomePage },
  { path: 'about/:id', component: AboutDetailComponent },
  { path: 'about', component: AboutPage },
  { path: 'agencies/:id', component: AgenciesDetailComponent },
  { path: 'agencies', component: AgenciesPage },
  { path: 'associates/:id', component: AssociatesDetailComponent },
  { path: 'associates', component: AssociatesPage },
  { path: 'perugibraltar', component: PeruGibraltarPage },
  { path: 'contact', component: ContactPage }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}