import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BoxesPanels } from '../../types/boxesPanels/boxes-panels';

@Injectable()
export class AgenciesService {
	private agenciesUrl = 'api/agenciesBoxes';
	private agenciesInfoENUrl = 'api/agenciesEN';
	private agenciesInfoESUrl = 'api/agenciesES';

	constructor(private http: Http) { }

	getBoxesPanel(): Promise<BoxesPanels[]> {
		return this.http.get(this.agenciesUrl)
	       .toPromise()
	       .then(response => response.json().data as BoxesPanels[])
	       .catch(this.handleError);
	}
	getHero(id: string): Promise<BoxesPanels> {
		var x = window.location.pathname;
		var y = false;
		(x.indexOf('es') != -1) ? y = true : y = false;
		const url = y ? `${this.agenciesInfoESUrl}/${id}` : `${this.agenciesInfoENUrl}/${id}`;
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