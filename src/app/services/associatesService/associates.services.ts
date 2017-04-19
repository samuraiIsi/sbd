import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BoxesPanels } from '../../types/boxesPanels/boxes-panels';

@Injectable()
export class AssociatesService {
	private associatesENUrl = 'api/associatesEN';
	private associatesESUrl = 'api/associatesES';

	constructor(private http: Http) { }

	getHero(id: string): Promise<BoxesPanels> {
		var x = window.location.pathname;
		var y = false;
		let response: string 
		(x.indexOf('/es') != -1) ? y = true : y = false;
		const url = y ? `${this.associatesESUrl}/${id}` : `${this.associatesENUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json().data as BoxesPanels)
			.catch(this.handleError);
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}