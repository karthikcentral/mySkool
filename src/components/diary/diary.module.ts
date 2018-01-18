import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DiaryComponent } from './diary';

@NgModule({
  declarations: [
    DiaryComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    DiaryComponent
  ]
})
export class DiaryComponentModule {}
