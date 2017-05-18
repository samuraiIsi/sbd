import { Component } from '@angular/core';

import { BoxesPanels }          from '../../types/boxesPanels/boxes-panels';
import { BoxesPanelService }    from '../../services/boxesPanelService/boxesPanelService.service';

@Component({
    moduleId: 'module.id',
    selector: 'associates-page',
    templateUrl: './associates.page.tpl.html'
})

export class AssociatesPage {
	boxesPanel: BoxesPanels[];
    constructor(
        private boxesPanelService: BoxesPanelService) { }
    getBoxesPanel(): void {
        this.boxesPanelService.getBoxesPanel().then(boxesPanel => this.boxesPanel = boxesPanel);
    }
    ngOnInit(): void {
        this.getBoxesPanel();
    }
}