import { Component } from '@angular/core';
@Component({
  selector: 'header-app',
  template: `
    <nav class="menu">
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/associates" routerLinkActive="active">Associates</a>
        <a routerLink="/agencies" routerLinkActive="active">Agencies</a>
        <a routerLink="/perugibraltar" routerLinkActive="active">Peru & Gibraltar</a>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  //title = 'Tour of Heroes';
}
