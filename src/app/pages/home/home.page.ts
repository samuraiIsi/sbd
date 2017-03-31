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
    // private progressSlides: boolean;
    // private slide: string;
    // private first: Object;
    // private second: Object;
    // private slideIndex: number;
    // private myTimer: any;

    carItem: Carousel[];

    constructor(private homeService: HomeService) { }

    getCarousel(): void {
        this.homeService.getCarousel().then(carItem => this.carItem = carItem);
    }

    cambiarFoto(): void {
        alert('hola');
    }

    changeColor(color: any) {
        
    }

    showSlides(): void{//this.slideIndex = 1;
        //this.first = true ? this.second = false : this.second = true;
        // if(this.second == true) {
        //     this.first = true;
        //     this.second = false;
        // } else {
        //     this.first = false;
        //     this.second = true;
        // }        
        // this.progressSlides = true;
        setInterval(this.showSlides, 4000);
        // console.log(this.slideIndex);
    }

    ngOnInit(): void {
        this.getCarousel();
        this.showSlides();
    }
}