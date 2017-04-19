import { Injectable } 					from '@angular/core';
import { Headers, Http } 				from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Details } 						from '../../types/details/details';
import { TextOnly } 					from '../../types/textOnly/text-only';

@Injectable()
export class AboutService {
	private detailsENUrl = 'api/detailsEN';
	private detailsESUrl = 'api/detailsES';
	private aboutTextENUrl = 'api/aboutTextEN';
	private aboutTextESUrl = 'api/aboutTextES';
	constructor(private http: Http) { }

	getAboutText(): Promise<TextOnly[]> {
		var x = window.location.pathname;
		var y = false;
		(x.indexOf('/es') != -1) ? y = true : y = false;
		const url = y ? `${this.aboutTextESUrl}` : `${this.aboutTextENUrl}`;
		return this.http.get(url)
	       .toPromise()
	       .then(response => response.json().data as TextOnly[])
	       .catch(this.handleError);
	}

	getHeroes(): Promise<Details[]> {
		return this.http.get(this.detailsENUrl)
	       .toPromise()
	       .then(response => response.json().data as Details[])
	       .catch(this.handleError);
	}

	getDetails(id: string): Promise<Details> {
		var x = window.location.pathname;
		var y = false;
		(x.indexOf('/es') != -1) ? y = true : y = false;
		const url = y ? `${this.detailsESUrl}/${id}` : `${this.detailsENUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json().data as Details)
			.catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}