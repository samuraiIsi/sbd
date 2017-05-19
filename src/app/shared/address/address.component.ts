import { Component, Input, OnInit } from '@angular/core';

import { Address }          		from '../../types/address/address';

declare var google: any;
@Component({
    moduleId: 'module.id',
    selector: 'address-component',
    templateUrl: './address.component.html',
    styleUrls: [ './address.component.css' ]
})

export class AddressComponent {
    @Input() add: Address;
}