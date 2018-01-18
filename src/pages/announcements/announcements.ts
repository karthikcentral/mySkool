import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
/**
 * Generated class for the AnnouncementsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-announcements',
  templateUrl: 'announcements.html',
})
export class AnnouncementsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnouncementsPage');
  }
  goHome(){
    this.navCtrl.push(HomePage);
  }

}
