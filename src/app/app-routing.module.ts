import { NgModule }                    from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';
import { HomePage }   			       from '../app/pages/home/home.page';
import { AboutPage }      		       from '../app/pages/about/about.page';
import { AgenciesPage }			       from '../app/pages/agencies/agencies.page';
import { AssociatesPage }		       from '../app/pages/associates/associates.page';
import { ContactPage }			       from '../app/pages/contact/contact.page';
import { AboutDetailComponent }        from '../app/shared/aboutDetails/about-detail.component';
import { AgenciesDetailComponent }     from '../app/shared/agencies-details/agencies-details.component';
import { AssociatesDetailComponent }   from '../app/shared/associates-details/associates-detail.component';
import { PeruGibraltarPage }           from '../app/pages/peru-gibraltar/peru-gibraltar.page';
import { Injectable }                  from '@angular/core';

let navMenuEN = ["/home", "/about", "/associates", "/agencies", "/perugibraltar", "/contact"];
let navMenuES = ["/es/inicio", "/es/nosotros", "/es/asociados", "/es/agencias", "/es/perugibraltar", "/es/contacto"];

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
        var text: string;
        var mainpath: string;
        var addedPath: string;
        var path = window.location.pathname;
        var pathS = path.split("/");
        var pathES = pathS.indexOf('es'); 
        if(pathES != -1 && pathS.length > 3) {
            var x = path.lastIndexOf("/");
            addedPath = path.slice(x);
            mainpath = path.slice(0, x);
        } else if (pathES == -1 && pathS.length > 2) {
            var x = path.lastIndexOf("/");
            addedPath = path.slice(x);
            mainpath = path.slice(0, x);
        } else {
            mainpath = path;
        }
        var getNavItemEN = navMenuEN.indexOf(mainpath);
        var getNavItemES = navMenuES.indexOf(mainpath);
            switch(mainpath) {
                case navMenuEN[getNavItemEN]:
                    path_string = navMenuES[getNavItemEN];
                    break;
                case navMenuES[getNavItemES]:
                    path_string = navMenuEN[getNavItemES];
                    break;
                default:
                    path_string = "home";
            }
        if(pathES !== -1 && pathS.length > 3) {
            window.location.pathname =  mainpath.replace(mainpath, path_string + addedPath);
        } else if(pathES == -1 && pathS.length > 2) {
            window.location.pathname =  mainpath.replace(mainpath, path_string + addedPath);
        } else {
            window.location.pathname =  mainpath.replace(mainpath, path_string);
        }
    }
}