import { Component, Input, OnInit } from '@angular/core';

import { Carousel }          from '../../types/carousel/carousel';


@Component({
    moduleId: 'module.id',
    selector: 'carousel-component',
    templateUrl: './carousel.component.html',
    styleUrls: [ './carousel.component.css' ]
})

export class CarouselComponent {
    @Input() carItem: Carousel;
}