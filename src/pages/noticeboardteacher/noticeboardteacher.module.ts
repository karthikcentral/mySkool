import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeboardteacherPage } from './noticeboardteacher';

@NgModule({
  declarations: [
    NoticeboardteacherPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticeboardteacherPage),
  ],
  exports: [
    NoticeboardteacherPage
  ]
})
export class NoticeboardteacherPageModule {}
