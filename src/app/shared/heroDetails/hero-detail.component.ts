import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../../services/heroService/hero.service';
import { Router } from '@angular/router'
import 'rxjs/add/operator/switchMap';

import { Hero } from '../../types/heroes/hero';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
    }
    goBack(): void {
        this.location.back();
    }
    save(): void {
        this.heroService.update(this.hero)
        .then(() => this.goBack());
    }

}