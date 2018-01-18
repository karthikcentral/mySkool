import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttteacherselfPage } from './attteacherself';

@NgModule({
  declarations: [
    AttteacherselfPage,
  ],
  imports: [
    IonicPageModule.forChild(AttteacherselfPage),
  ],
  exports: [
    AttteacherselfPage
  ]
})
export class AttteacherselfPageModule {}
