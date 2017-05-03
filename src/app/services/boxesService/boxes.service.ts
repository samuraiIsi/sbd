import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Boxes } from '../../types/boxes/boxes';

@Injectable()
export class BoxesService {
	private boxesENUrl = 'api/boxesEN';  // URL to web api
	private boxesESUrl = 'api/boxesES';  // URL to web api

	constructor(private http: Http) { }

	getBoxes(): Promise<Boxes[]> {
		var x = window.location.hash;
		var y = false;
		(x.indexOf('es') != -1) ? y = true : y = false;
		const url = y ? `${this.boxesESUrl}` : `${this.boxesENUrl}`;
		return this.http.get(url)
	       .toPromise()
	       .then(response => response.json().data as Boxes[])
	       .catch(this.handleError);
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}