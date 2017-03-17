import { Component, OnInit } from '@angular/core';

import { Hero } from '../../types/heroes/hero';
import { HeroService } from '../../services/heroService/hero.service';


@Component({
	moduleId: module.id,
	selector: 'home-page',
	templateUrl: './home.page.tpl.html',
	styleUrls: [ '../../../theme/styles/home.page.css' ]
})
export class HomePage implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}