import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimetableteacherPage } from './timetableteacher';

@NgModule({
  declarations: [
    TimetableteacherPage,
  ],
  imports: [
    IonicPageModule.forChild(TimetableteacherPage),
  ],
  exports: [
    TimetableteacherPage
  ]
})
export class TimetableteacherPageModule {}
