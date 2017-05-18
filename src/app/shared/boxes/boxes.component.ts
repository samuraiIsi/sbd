import { Component, Input, OnInit } from '@angular/core';

import { BoxesPanels }          from '../../types/boxesPanels/boxes-panels';


@Component({
    moduleId: 'module.id',
    selector: 'boxes-component',
    templateUrl: './boxes.component.html',
    styleUrls: [ './boxes.css' ]
})

export class BoxesComponent {
    @Input() box: BoxesPanels;
}