import { Component, OnInit } from '@angular/core';

import '../assets/css/styles.css';
import { Trans }                from './types/trans/trans'
import { HomeService }          from './services/homeService/home.service';
import { AppRoutingModule }     from '../app/app-routing.module'


@Component({
  selector: 'header-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    private btnMenuClass: string;
    private collapseIn: string;
    private ENClass: string;
    private ESClass: string;

    tr: Trans; 
   
    constructor(private homeService: HomeService, private appRouting: AppRoutingModule) { }

    convertBtnMenu(datanav: any): void {
        this.btnMenuClass = (datanav.btnMenuClass === "change") ? "" : "change";
    }

    dropDownTopMenu(): void {
        this.collapseIn = (this.collapseIn === "in") ? "in out" : "in";
    }

    changeSpanishApp(): void{
        this.appRouting.changeSpanish();
    }

    statusLang(): void {
        var path = window.location.hash.split("/");
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
