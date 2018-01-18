import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportcardPage } from './reportcard';

@NgModule({
  declarations: [
    ReportcardPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportcardPage),
  ],
  exports: [
    ReportcardPage
  ]
})
export class ReportcardPageModule {}
