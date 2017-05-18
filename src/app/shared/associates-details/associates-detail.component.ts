import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { AssociatesService } from '../../services/associatesService/associates.services';
import { Router } from '@angular/router'
import 'rxjs/add/operator/switchMap';

import { BoxesPanels } from '../../types/boxesPanels/boxes-panels';

@Component({
  moduleId: 'module.id',
  selector: 'associates-detail',
  templateUrl: './associates-detail.component.html',
})

export class AssociatesDetailComponent implements OnInit {
    @Input() boxesPanels: BoxesPanels;
    constructor(
        private boxesPanelsService: AssociatesService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.boxesPanelsService.getHero(params['id']))
        .subscribe(boxesPanels => this.boxesPanels = boxesPanels);
    }
    goBack(): void {
        this.location.back();
    }
}