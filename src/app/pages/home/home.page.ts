import { Component, OnInit } from '@angular/core';

import { Hero } from '../../types/heroes/hero';
import { AssociatesService }         from '../../services/associatesService/associates.services';


@Component({
	moduleId: module.id,
	selector: 'home-page',
	templateUrl: './home.page.tpl.html',
	styleUrls: [ '../../../theme/styles/home.page.css' ]
})
export class HomePage implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: AssociatesService) { }

  ngOnInit(): void {
    // this.heroService.getBoxesPanel()
    //   .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}