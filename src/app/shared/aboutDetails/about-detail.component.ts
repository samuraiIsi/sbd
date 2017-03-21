import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { AboutService } from '../../services/aboutService/about.service';
import { Router } from '@angular/router'
import 'rxjs/add/operator/switchMap';

import { Hero } from '../../types/heroes/hero';

@Component({
  moduleId: module.id,
  selector: 'about-detail',
  templateUrl: './about-detail.component.html',
})

export class AboutDetailComponent implements OnInit {
    @Input() hero: Hero;
    constructor(
        private heroService: AboutService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.heroService.getHero(params['id']))
        .subscribe(hero => this.hero = hero);
    }
    goBack(): void {
        this.location.back();
    }
}