import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Boxes } from '../../types/boxes/boxes';

@Injectable()
export class BoxesService {
	private boxesUrl = 'api/boxes';  // URL to web api

	constructor(private http: Http) { }

	getBoxes(): Promise<Boxes[]> {
		return this.http.get(this.boxesUrl)
	       .toPromise()
	       .then(response => response.json().data as Boxes[])
	       .catch(this.handleError);
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}