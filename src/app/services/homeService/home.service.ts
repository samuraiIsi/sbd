import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Carousel } from '../../types/carousel/carousel';

@Injectable()
export class HomeService {
	private carouselHomeUrl = 'api/carouselhome';  // URL to web api

	constructor(private http: Http) { }

	getCarousel(): Promise<Carousel[]> {
		return this.http.get(this.carouselHomeUrl)
	       .toPromise()
	       .then(response => response.json().data as Carousel[])
	       .catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}