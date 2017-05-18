import { Component, OnInit }    from '@angular/core';

import { Boxes }                from '../../types/boxes/boxes';
import { Carousel }             from '../../types/carousel/carousel';
import { HomeService }          from '../../services/homeService/home.service';


@Component({
	moduleId: 'module.id',
	selector: 'home-page',
	templateUrl: './home.page.tpl.html',
    styleUrls: [ './home.page.css' ]
})
export class HomePage implements OnInit {
    carItem: Carousel[];
    boxes: Boxes[];

    constructor(private homeService: HomeService, private homeBoxesService: HomeService) { }

    getCarousel(): void {
        this.homeService.getCarousel().then(carItem => this.carItem = carItem);
    }

    getHomeBoxes(): void {
        this.homeBoxesService.getHomeBoxes().then(boxes => this.boxes = boxes);
    }

    ngOnInit(): void {
        this.getCarousel();
        this.getHomeBoxes();
    }
}