import { Component, OnInit } from '@angular/core';

import { Address }   from '../../types/address/address';

import { ContactService } from '../../services/contactService/contact.service';

declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'contact-page',
    templateUrl: './contact.page.html',
    styleUrls: [ '../../../theme/styles/about.page.css' ]
})

export class ContactPage implements OnInit {
	addes: Address[];
	constructor(
        private addressService: ContactService) { }
    getAddress(): void {
        this.addressService.getAddress().then(addes => this.addes = addes);
    }
    getMap(): void {
    	var directionsDisplay = new google.maps.DirectionsRenderer;
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 7,
			center: {lat: 41.85, lng: -87.65}
		});
        directionsDisplay.setMap(map);
		var directionsDisplay2 = new google.maps.DirectionsRenderer;
		var map2 = new google.maps.Map(document.getElementById('map2'), {
			zoom: 7,
			center: {lat: 41.85, lng: -87.65}
		});
    }
	ngOnInit() {
		this.getAddress();
		this.getMap();
    }
}