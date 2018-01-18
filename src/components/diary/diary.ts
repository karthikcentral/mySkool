import { Component } from '@angular/core';

/**
 * Generated class for the DiaryComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'diary',
  templateUrl: 'diary.html'
})
export class DiaryComponent {

  text: string;

  constructor() {
    console.log('Hello DiaryComponent Component');
    this.text = 'Hello World';
  }

}
