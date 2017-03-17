import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Boxes }                from '../../types/boxes/boxes';
import { BoxesService }         from '../../services/boxesService/boxes.service';

@Component({
    moduleId: module.id,
    selector: 'about-page',
    templateUrl: './about.page.tpl.html'
})

export class AboutPage {
	boxes: Boxes[];
    constructor(
        private boxesService: BoxesService) { }
    getBoxes(): void {
        this.boxesService.getBoxes().then(boxes => this.boxes = boxes);
    }
    ngOnInit(): void {
        this.getBoxes();
    }
}