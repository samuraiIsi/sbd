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
    progressPercentage: number;

    heroes: Hero[] = [];

    constructor(private heroService: AssociatesService) { }

    showSlides(): void{
        var i, slides, dots;
        this.progressPercentage = 1000;
    }

    ngOnInit(): void {
        this.showSlides();
    }
}