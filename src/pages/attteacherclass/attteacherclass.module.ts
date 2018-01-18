import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttteacherclassPage } from './attteacherclass';

@NgModule({
  declarations: [
    AttteacherclassPage,
  ],
  imports: [
    IonicPageModule.forChild(AttteacherclassPage),
  ],
  exports: [
    AttteacherclassPage
  ]
})
export class AttteacherclassPageModule {}
