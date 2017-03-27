import { Component } from '@angular/core';
@Component({
  selector: 'header-app',
  template: `
    <header class='header-nav'>
        <div>
            <img src='../../theme/assets/img/logo-header.png'>
            <span>Gibraltar</span>
            <span>Strategic Business Development</span>
        </div>
        <nav class="menu">
            <a routerLink="/home" routerLinkActive="active">Home</a>
            <a routerLink="/about" routerLinkActive="active">About</a>
            <a routerLink="/associates" routerLinkActive="active">Associates</a>
            <a routerLink="/agencies" routerLinkActive="active">Agencies</a>
            <a routerLink="/perugibraltar" routerLinkActive="active">Peru & Gibraltar</a>
            <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </nav>
    </header>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  //title = 'Tour of Heroes';
}
