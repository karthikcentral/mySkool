import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentprofilePage } from './studentprofile';

@NgModule({
  declarations: [
    StudentprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(StudentprofilePage),
  ],
  exports: [
    StudentprofilePage
  ]
})
export class StudentprofilePageModule {}
