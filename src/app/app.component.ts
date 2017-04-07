import { Component, OnInit,  } from '@angular/core';

import { Trans }                from './types/trans/trans'
import { HomeService }          from './services/homeService/home.service';

export class Hero {
  value: string;
}
const HEROES: Hero[] = [
  { value: 'EN'},
  { value: 'ES'}
];
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
            <a type="button" (click)="changeEnglish(this)" [ngClass]="ENClass">EN</a>
            <a type="button" (click)="changeSpanish(this)" [ngClass]="ESClass">ES</a>
         </div>
        <div class="lang-section pull-right">
           
        </div>
        <div class="container-btn-menu pull-right" [ngClass]="btnMenuClass" (click)="convertBtnMenu(this)">
            <a href="javascript:void(0);" (click)="dropDownTopMenu()">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </a>
        </div>
        <nav class="menu nav nav-pills collapse navbar-collapse topnav" [ngClass]="collapseIn">
            <a *ngFor="let nav of tr" routerLink="/{{nav}}" routerLinkActive="active" >{{nav}}</a>
        </nav>

   

    </header>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent implements OnInit {
    private btnMenuClass: string;
    private checking: boolean;
    private collapseIn: string;
    private ENClass: string;
    private ESClass: string;
    private isActive?: boolean;

    tr: Trans[]; 
   
    constructor(private homeService: HomeService) { }

    convertBtnMenu(datanav: any): void {
        this.btnMenuClass = (datanav.btnMenuClass === "change") ? "" : "change";
    }

    dropDownTopMenu(): void {
        this.collapseIn = (this.collapseIn === "in") ? "in out" : "in";
    }

    changeSpanish(e: any): void{
        var text = '';
        var path = window.location.pathname;
        var pathS = path.split("/");
        pathS.join();
        pathS.splice(2, 0, "es");
        for(var i =0; i<pathS.length; i++) {
            text += pathS[i] + "/";
        }
        (path.indexOf('es') > -1) ? window.location.pathname =  path : window.location.pathname = text;
        
    }
    changeEnglish(e: any): void{
        var text = '';
        var path = window.location.pathname.split("/");
        var index = path.indexOf('es');
        if(index > -1) {
            path.splice(index, 1);
        }
        for(var i =0; i<path.length; i++) {
            text += path[i] + "/";
        }
        window.location.pathname =  text;
    }

    statusLang(): void {
        var path = window.location.pathname.split("/");
        var index = path.indexOf('es');
        if(index > -1) {
            this.ESClass = 'hidden-m';
            this.ENClass = 'showed-m';
        } else {
            this.ESClass = 'showed-m';
            this.ENClass = 'hidden-m';
        }
    }
    getNavMenu(): void {
        this.homeService.getNavMenu().then(tr => this.tr = tr);
    }
    ngOnInit() {
        this.statusLang();
        this.getNavMenu();
    }
}
