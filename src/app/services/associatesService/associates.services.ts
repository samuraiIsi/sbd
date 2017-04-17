import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BoxesPanels } from '../../types/boxesPanels/boxes-panels';

@Injectable()
export class AssociatesService {
	private associatesENUrl = 'api/associatesEN';  // URL to web api
	private associatesESUrl = 'api/associatesES';  // URL to web api

	constructor(private http: Http) { }

	getHero(id: string): Promise<BoxesPanels> {
		var x = window.location.pathname;
		var y = false;
		(x.indexOf('es') != -1) ? y = true : y = false;
		const url = y ? `${this.associatesESUrl}/${id}` : `${this.associatesENUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json().data as BoxesPanels)
			.catch(this.handleError);
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}