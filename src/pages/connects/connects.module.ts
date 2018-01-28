import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectsPage } from './connects';

@NgModule({
  declarations: [
    ConnectsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnectsPage),
  ],
})
export class ConnectsPageModule {}
