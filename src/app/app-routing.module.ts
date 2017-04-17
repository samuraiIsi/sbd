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
import { Injectable } from '@angular/core';

var path = window.location.pathname;
var cond = false;
    (path.indexOf('/es') != -1) ? cond = false : cond = true;
    let urlHome = cond ? 'home' : 'es/inicio';
    let urlAbout = cond ? 'about' : 'es/nosotros';
    let urlAgencies = cond ? 'agencies' : 'es/agencias';
    let urlAssociates = cond ? 'associates' : 'es/asociados';
    let urlPerugibraltar = cond ? 'perugibraltar' : 'es/perugibraltar';
    let urlContact = cond ? 'contact' : 'es/contacto';

const routes: Routes = [
  { path: '', redirectTo: urlHome, pathMatch: 'full' },
  { path: urlHome,  component: HomePage },
  { path: urlAbout + '/:id', component: AboutDetailComponent },
  { path: urlAbout, component: AboutPage },
  { path: urlAgencies + '/:id', component: AgenciesDetailComponent },
  { path: urlAgencies, component: AgenciesPage },
  { path: urlAssociates + '/:id', component: AssociatesDetailComponent },
  { path: urlAssociates, component: AssociatesPage },
  { path: urlPerugibraltar, component: PeruGibraltarPage },
  { path: urlContact, component: ContactPage }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
@Injectable()
export class AppRoutingModule {
    changeSpanish(): void{
        var path_string: string;
        var path = window.location.pathname;
        switch(path) {
            case "/home":
                path_string = "es/inicio";
                break;
            case "/es/inicio":
                path_string = "home";
                break;
            case "/about":
                path_string = "es/nosotros";
                break;
            case "/about/michael":
                path_string = "es/nosotros/michael";
                break;
            case "/associates":
                path_string = "es/asociados";
                break;
            case "/es/asociados":
                path_string = "associates";
                break;
            case "/es/nosotros/michael":
                path_string = "/about/michael";
                break;
            case "/es/nosotros":
                path_string = "about";
                break;
            case "/agencies":
                path_string = "es/agencias";
                break;
            case "/es/agencias":
                path_string = "agencies";
                break;
            case "/perugibraltar":
                path_string = "es/perugibraltar";
                break;
            case "/es/perugibraltar":
                path_string = "perugibraltar";
                break;
            case "/contact":
                path_string = "es/contacto";
                break;
            case "/es/contacto":
                path_string = "contact";
                break;
            default:
                path_string = "404";
        }
        window.location.pathname =  path.replace(path, path_string);
    }
}