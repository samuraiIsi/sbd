import { Component } from '@angular/core';
@Component({
  selector: 'header-app',
  template: `
    <header class='header-nav'>
        <div class='pull-left logo-area'>
            <img src='../../theme/assets/img/logo-header.png' class='pull-left'>
            <ul class='pull-left'>
                <li class='fs23'>Gibraltar</li>
                <li>Strategic Business Development</li>
            </ul>
        </div>
        <div class="lang-section pull-right">
            <a href="#">EN</a>  <a href="#">ES</a>
        </div>
        <div class="container-btn-menu pull-right" [ngClass]="btnMenuClass" (click)="convertBtnMenu(this)">
            <a href="javascript:void(0);" (click)="dropDownTopMenu()">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </a>
        </div>
        <nav class="menu nav nav-pills collapse navbar-collapse topnav" [ngClass]="collapseIn">
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
    private btnMenuClass: string;
    private collapseIn: string;

    convertBtnMenu(datanav: any): void {
        this.btnMenuClass = (datanav.btnMenuClass === "change") ? "" : "change";
    }

    dropDownTopMenu(): void {
        this.collapseIn = (this.collapseIn === "in") ? "in out" : "in";
    } 
}
