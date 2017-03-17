import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage }   			from '../app/pages/home/home.page';
import { AboutPage }      		from '../app/pages/about/about.page';
import { AgenciesPage }			from '../app/pages/agencies/agencies.page';
import { AssociatesPage }		from '../app/pages/associates/associates.page';
import { ContactPage }			from '../app/pages/contact/contact.page';
import { HeroDetailComponent }  from '../app/shared/heroDetails/hero-detail.component';
import { PeruGibraltarPage }    from '../app/pages/peru-gibraltar/peru-gibraltar.page';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomePage },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'about',     component: AboutPage },
  { path: 'agencies',     component: AgenciesPage },
  { path: 'associates',     component: AssociatesPage },
  { path: 'perugibraltar',     component: PeruGibraltarPage },
  { path: 'contact',     component: ContactPage }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}