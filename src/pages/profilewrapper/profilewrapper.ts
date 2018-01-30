import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilewrapperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profilewrapper',
  templateUrl: 'profilewrapper.html',
})
export class ProfilewrapperPage {
  livesIn:string = 'Dubai';
  sonName:string = 'Basid';
  gender:string = 'Male';
  address:string = 'NA';
  clicklivesIn() {
    this.livesIn = null;
  }
  clearAddress() {
    this.address = null;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilewrapperPage');
  }

}
