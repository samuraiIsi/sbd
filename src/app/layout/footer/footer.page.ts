import { Component } from '@angular/core';

import { Address }   from '../../types/address/address';

import { FooterService } from '../../services/footer/footer.service'

@Component({
  moduleId: 'module.id',
  selector: 'footer-app',
  templateUrl: './footer.page.html',
  styleUrls: [ './footer.css' ]
})
export class AppComponentFooter  { 
	addes: Address[];
	constructor(
        private addressService: FooterService) { }
    getAddress(): void {
        this.addressService.getAddress().then(addes => this.addes = addes);
    }
    ngOnInit(): void {
        this.getAddress();
    }

}