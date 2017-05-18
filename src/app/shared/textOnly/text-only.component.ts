import { Component, Input } 		 from '@angular/core';

import { TextOnly }          		 from '../../types/textOnly/text-only';


@Component({
    moduleId: 'module.id',
    selector: 'text-only-component',
    templateUrl: './text-only.component.html'
})

export class TextComponent {
    @Input() txt: TextOnly;
}