import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
/**
 * Generated class for the ReportcardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reportcard',
  templateUrl: 'reportcard.html',
})
export class ReportcardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportcardPage');
  }
  goHome(){
    this.navCtrl.push(HomePage);
  }

}
