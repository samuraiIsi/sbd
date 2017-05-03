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


let navMenuEN = ["#/home", "#/about", "#/associates", "#/agencies", "#/perugibraltar", "#/contact"];
let navMenuES = ["#/es/inicio", "#/es/nosotros", "#/es/asociados", "#/es/agencias", "#/es/perugibraltar", "#/es/contacto"];

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'es/inicio', pathMatch: 'full' },
  { path: 'home',  component: HomePage },
  { path: 'es/inicio',  component: HomePage },
  { path: 'about' + '/:id', component: AboutDetailComponent },
  { path: 'about', component: AboutPage },
  { path: 'es/nosotros' + '/:id', component: AboutDetailComponent },
  { path: 'es/nosotros', component: AboutPage },
  { path: 'agencies' + '/:id', component: AgenciesDetailComponent },
  { path: 'agencies', component: AgenciesPage },
  { path: 'es/agencias' + '/:id', component: AgenciesDetailComponent },
  { path: 'es/agencias', component: AgenciesPage },
  { path: 'associates' + '/:id', component: AssociatesDetailComponent },
  { path: 'associates', component: AssociatesPage },
  { path: 'es/asociados' + '/:id', component: AssociatesDetailComponent },
  { path: 'es/asociados', component: AssociatesPage },
  { path: 'perugibraltar', component: PeruGibraltarPage },
  { path: 'es/perugibraltar', component: PeruGibraltarPage },
  { path: 'contact', component: ContactPage },
  { path: 'es/contacto', component: ContactPage }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})

@Injectable()
export class AppRoutingModule {
    changeSpanish(): void{
        var ENClass: string;
        var ESClass: string;
        var path_string: string;
        var text: string;
        var mainpath: string;
        var mainpath: string;
        var addedPath: string;

        var path = window.location.hash;

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
            window.location.hash =  mainpath.replace(mainpath, path_string + addedPath);
        } else if(pathES == -1 && pathS.length > 2) {
            window.location.hash =  mainpath.replace(mainpath, path_string + addedPath);
        } else {
            window.location.hash =  mainpath.replace(mainpath, path_string);
        }
        location.reload();
    }
}