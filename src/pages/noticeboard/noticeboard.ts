import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-noticeboard',
  templateUrl: 'noticeboard.html',
})
export class NoticeboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goHome(){
    this.navCtrl.push(HomePage);
  }

}
