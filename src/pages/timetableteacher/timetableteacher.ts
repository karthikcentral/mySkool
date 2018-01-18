import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HometeacherPage} from '../../pages/hometeacher/hometeacher';
/**
 * Generated class for the TimetableteacherPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-timetableteacher',
  templateUrl: 'timetableteacher.html',
})
export class TimetableteacherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimetableteacherPage');
  }

  goHome(){
    this.navCtrl.push(HometeacherPage);
  }

}
