import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { BoxesPanels }             from '../../types/boxesPanels/boxes-panels';
import { AgenciesService }         from '../../services/agenciesService/agencies.service';

@Component({
    moduleId: module.id,
    selector: 'agencies-page',
    templateUrl: './agencies.page.tpl.html'
})

export class AgenciesPage {
    agencies: BoxesPanels[];
    constructor(
        private agenciesService: AgenciesService) { }
    getBoxesPanel(): void {
        this.agenciesService.getBoxesPanel().then(agencies => this.agencies = agencies);
    }
    ngOnInit(): void {
        this.getBoxesPanel();
    }
}