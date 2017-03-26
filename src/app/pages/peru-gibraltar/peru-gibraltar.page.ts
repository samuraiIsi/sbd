import { Component } from '@angular/core';

import { Accordion } from '../../types/accordion/accordion';
import { PeruGibService } from '../../services/peruGib/peru-gib.service';

@Component({
    moduleId: module.id,
    selector: 'peru-gibraltar-page',
    templateUrl: './peru-gibraltar.page.html'
})

export class PeruGibraltarPage {
	perugib: Accordion[];
    constructor(
        private perugibService: PeruGibService) { }
    getInfo(): void {
        this.perugibService.getInfo().then(perugib => this.perugib = perugib);
    }
    ngOnInit(): void {
        this.getInfo();
    }
}