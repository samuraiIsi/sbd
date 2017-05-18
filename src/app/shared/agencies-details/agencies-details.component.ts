import { Component, OnInit, Input }   from '@angular/core';
import { ActivatedRoute, Params }     from '@angular/router';
import { Location }                   from '@angular/common';

import { AgenciesService }            from '../../services/agenciesService/agencies.service';
import { Router }                     from '@angular/router'
import 'rxjs/add/operator/switchMap';

import { BoxesPanels } from '../../types/boxesPanels/boxes-panels';

@Component({
  moduleId: 'module.id',
  selector: 'agencies-detail',
  templateUrl: './agencies-details.component.html',
})

export class AgenciesDetailComponent implements OnInit {
    @Input() agenciesInfo: BoxesPanels;
    constructor(
        private boxesPanelsService: AgenciesService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.boxesPanelsService.getHero(params['id']))
        .subscribe(agenciesInfo => this.agenciesInfo = agenciesInfo);
    }
    goBack(): void {
        this.location.back();
    }
}