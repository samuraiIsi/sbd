import { Component, Input, OnInit } from '@angular/core';

import { BasicStructurePage }   from '../../types/basicStructurePage/basic-structure-page';

@Component({
    moduleId: 'module.id',
    selector: 'basic-structure-page-component',
    templateUrl: './basic-structure-page.component.html'
})

export class BasicStructurePageComponent {
    @Input() bsp: BasicStructurePage;
}