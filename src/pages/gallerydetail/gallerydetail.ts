import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GalleryPage} from '../../pages/gallery/gallery';
/**
 * Generated class for the GallerydetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gallerydetail',
  templateUrl: 'gallerydetail.html',
})
export class GallerydetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GallerydetailPage');
  }

  goBack(){
    this.navCtrl.push(GalleryPage);
  }

}
