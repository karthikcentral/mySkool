import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GallerydetailPage } from './gallerydetail';

@NgModule({
  declarations: [
    GallerydetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GallerydetailPage),
  ],
  exports: [
    GallerydetailPage
  ]
})
export class GallerydetailPageModule {}
