import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HometeacherPage } from './hometeacher';

@NgModule({
  declarations: [
    HometeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(HometeacherPage),
  ],
  exports: [
    HometeacherPage
  ]
})
export class HometeacherPageModule {}
