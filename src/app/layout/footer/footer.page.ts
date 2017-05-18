import { Component } from '@angular/core';

import { Address }   from '../../types/address/address';

import { FooterService } from '../../services/footer/footer.service'

@Component({
  selector: 'footer-app',
  templateUrl: './footer.page.html'
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