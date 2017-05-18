import { Component, Input, OnInit } from '@angular/core';

import { Accordion }          from '../../types/accordion/accordion';


@Component({
    moduleId: 'module.id',
    selector: 'accordion-component',
    templateUrl: './accordion.component.html'
})

export class AccordionComponent {
    @Input() acc: Accordion;
    showAcc = true;
    changeClass = 'fa fa-chevron-down pull-right';
    showAccordion(showAcc: any, changeClass: string) {
    	showAcc == false ? this.showAcc = true : this.showAcc = false;
    	changeClass == 'fa fa-chevron-down pull-right' ? 
    			this.changeClass = 'fa fa-chevron-up pull-right' 
    				: 
    			this.changeClass = 'fa fa-chevron-down pull-right';
    }
}