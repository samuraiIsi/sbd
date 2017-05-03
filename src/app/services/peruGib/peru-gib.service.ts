import { Injectable } from '@angular/core';
import { Http } 	  from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Accordion } from '../../types/accordion/accordion';

@Injectable()
export class PeruGibService {
	private perugibENUrl = 'api/perugibEN';
	private perugibESUrl = 'api/perugibES';
	private perugiImgbUrl = 'api/perugibimg';

	constructor(private http: Http) { }

	getInfo(): Promise<Accordion[]> {
		var path = window.location.hash;
		var cond = false;
		path.indexOf('es') != -1 ? cond = true : cond = false;
		const url = cond ? `${this.perugibESUrl}` : `${this.perugibENUrl}`;
		return this.http.get(url)
	       .toPromise()
	       .then(response => response.json().data as Accordion[])
	       .catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}