import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Boxes }                from '../../types/boxes/boxes';
import { TextOnly }             from '../../types/textOnly/text-only';
import { BoxesService }         from '../../services/boxesService/boxes.service';
import { AboutService }         from '../../services/aboutService/about.service';

@Component({
    moduleId: module.id,
    selector: 'about-page',
    templateUrl: './about.page.tpl.html'
})

export class AboutPage {
	boxes: Boxes[];
    texts: TextOnly[];
    constructor(
        private boxesService: BoxesService, private aboutTextService: AboutService) { }
    getBoxes(): void {
        this.boxesService.getBoxes().then(boxes => this.boxes = boxes);
    }
    getAboutText(): void {
        this.aboutTextService.getAboutText().then(texts => this.texts = texts);
    }
    ngOnInit(): void {
        this.getBoxes();
        this.getAboutText();
    }
}