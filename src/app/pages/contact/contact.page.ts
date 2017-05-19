import { Component, OnInit } from '@angular/core';

import { Address }   from '../../types/address/address';

import { ContactService } from '../../services/contactService/contact.service';

declare var google: any;

@Component({
    moduleId: 'module.id',
    selector: 'contact-page',
    templateUrl: './contact.page.html',
    styleUrls: ['./contact.page.css']
})

export class ContactPage implements OnInit {
	addes: Address[];
	constructor(
        private addressService: ContactService) { }
    getAddress(): void {
        this.addressService.getAddress().then(addes => this.addes = addes);
        this.getMap();
    }
    getMap(): void {
    	var myCenter1 = new google.maps.LatLng(-12.092966103402398, -77.0209658);
    	var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 16,
            center: myCenter1,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            draggable: false
		});
    	var marker1 = new google.maps.Marker({
                position: myCenter1,
                title: 'Carlos D. Marquez Moran'
            });

        marker1.setMap(map);
        marker1.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker1.setAnimation(null); }, 1500);

        var myCenter2 = new google.maps.LatLng(36.14788501160045, -5.359244399999966);
    	var map2 = new google.maps.Map(document.getElementById('map2'), {
			zoom: 17,
            center: myCenter2,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            draggable: false
		});
    	var marker2 = new google.maps.Marker({
                position: myCenter2,
                title: 'Michael A. Feetham'
            });

        marker2.setMap(map2);
        marker2.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker2.setAnimation(null); }, 1500);
    }
	ngOnInit() {
		this.getAddress();
		
    }
}