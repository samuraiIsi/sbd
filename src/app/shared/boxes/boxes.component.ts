import { Component, Input, OnInit } from '@angular/core';

import { Boxes }                from '../../types/boxes/boxes';
import { BoxesPanels }          from '../../types/boxesPanels/boxes-panels';
import { BoxesService }         from '../../services/boxesService/boxes.service';
import { BoxesPanelService }    from '../../services/boxesPanelService/boxesPanelService.service';

@Component({
    moduleId: module.id,
    selector: 'boxes-component',
    templateUrl: './boxes.component.html',
    styleUrls: [ '../../../theme/styles/component/boxes.css' ],
    providers: [BoxesService, BoxesPanelService]
})

export class BoxesComponent {
    @Input() box: BoxesPanels;
}