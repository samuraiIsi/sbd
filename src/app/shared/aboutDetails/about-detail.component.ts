import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { AboutService } from '../../services/aboutService/about.service';

import { Router } from '@angular/router'
import 'rxjs/add/operator/switchMap';

import { Details } from '../../types/details/details';

@Component({
  moduleId: 'module.id',
  selector: 'about-detail',
  templateUrl: './about-detail.component.html',
})

export class AboutDetailComponent implements OnInit {
    @Input() details: Details;
    
    constructor(
        private detailService: AboutService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.detailService.getDetails(params['id']))
        .subscribe(details => this.details = details);
    }
    goBack(): void {
        this.location.back();
    }
}