import { Component, Input, OnInit } from '@angular/core';

import { Accordion }          from '../../types/accordion/accordion';


@Component({
    moduleId: module.id,
    selector: 'accordion-component',
    templateUrl: './accordion.component.html'
})

export class AccordionComponent {
    @Input() acc: Accordion;
}