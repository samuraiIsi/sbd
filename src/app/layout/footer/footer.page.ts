import { Component } from '@angular/core';

@Component({
  selector: 'footer-app',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponentFooter  { name = 'Footer'; }