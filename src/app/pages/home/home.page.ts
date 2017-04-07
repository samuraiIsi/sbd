import { Component, OnInit } from '@angular/core';

import { Carousel }             from '../../types/carousel/carousel';
import { HomeService }          from '../../services/homeService/home.service';


@Component({
	moduleId: module.id,
	selector: 'home-page',
	templateUrl: './home.page.tpl.html',
	styleUrls: [ '../../../theme/styles/home.page.css' ]
})
export class HomePage implements OnInit {
    carItem: Carousel[];

    constructor(private homeService: HomeService) { }

    getCarousel(): void {
        this.homeService.getCarousel().then(carItem => this.carItem = carItem);
    }

    ngOnInit(): void {
        this.getCarousel();
    }
}