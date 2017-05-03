import { Injectable } 					from '@angular/core';
import { Http } 						from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Boxes }                		from '../../types/boxes/boxes';
import { Trans } 						from '../../types/trans/trans';
import { Carousel } 					from '../../types/carousel/carousel';

@Injectable()
export class HomeService {
	private carouselHomeUrl = 	'api/carouselhome';  
	private carouselHomeESUrl = 'api/carouselhomeES';
	private navMenuENUrl = 		'api/navMenuEN';
	private navMenuESUrl = 		'api/navMenuES';
	private homeBoxesENUrl = 	'api/homeBoxesEN';
	private homeBoxesESUrl = 	'api/homeBoxesES';

	constructor(private http: Http) { }

	getCarousel(): Promise<Carousel[]> {
		var path = window.location.hash;
		var cond = false;
		path.indexOf('#/es') != -1 ? cond = true : cond = false;
		const url = cond ? `${this.carouselHomeESUrl}` : `${this.carouselHomeUrl}`;
		return this.http.get(url)
	       .toPromise()
	       .then(response => response.json().data as Carousel[])
	       .catch(this.handleError);
	}

	getHomeBoxes(): Promise<Boxes[]> {
		var x = window.location.hash;
		var y = false;
		(x.indexOf('#/es') != -1) ? y = true : y = false;
		const url = y ? `${this.homeBoxesESUrl}` : `${this.homeBoxesENUrl}`;
		return this.http.get(url)
	       .toPromise()
	       .then(response => response.json().data as Boxes[])
	       .catch(this.handleError);
	}

	getNavES(): Promise<Trans> {
		return this.http.get(this.navMenuESUrl)
	       .toPromise()
	       .then(response => response.json().data as Trans)
	       .catch(this.handleError);
	}

	getNavEN(): Promise<Trans> {
		return this.http.get(this.navMenuENUrl)
	       .toPromise()
	       .then(response => response.json().data as Trans)
	       .catch(this.handleError);
	}

	getNavMenu(): Promise<Trans> {
		var path = window.location.hash;
		var cond = false;
		path.indexOf('#/es') != -1 ? cond = true : cond = false;
		const url = cond ? `${this.navMenuESUrl}` : `${this.navMenuENUrl}`;
		return this.http.get(url)
	       .toPromise()
	       .then(response => response.json().data as Trans)
	       .catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}