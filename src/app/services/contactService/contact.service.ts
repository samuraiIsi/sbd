import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Address } from '../../types/address/address';

@Injectable()
export class ContactService {
	private contactENUrl = 'api/contactpageEN';
	private contactHomeESUrl = 'api/contactpageES';

	constructor(private http: Http) { }

	getAddress(): Promise<Address[]> {
		var path = window.location.hash;
		var cond = false;
		path.indexOf('es') != -1 ? cond = true : cond = false;
		const url = cond ? `${this.contactHomeESUrl}` : `${this.contactENUrl}`;
		return this.http.get(url)
	       .toPromise()
	       .then(response => response.json().data as Address[])
	       .catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}