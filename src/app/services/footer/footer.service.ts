import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Address } from '../../types/address/address';

@Injectable()
export class FooterService {
	private carouselHomeUrl = 'api/footer';

	constructor(private http: Http) { }

	getAddress(): Promise<Address[]> {
		return this.http.get(this.carouselHomeUrl)
	       .toPromise()
	       .then(response => response.json().data as Address[])
	       .catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}