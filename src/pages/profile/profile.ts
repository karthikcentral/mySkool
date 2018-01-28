import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilewrapperPage } from '../profilewrapper/profilewrapper';
import { ConnectsPage } from '../connects/connects';
import { SettingsPage } from '../settings/settings';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  page1 = ProfilewrapperPage;
  page2 = ConnectsPage;
  page3 = SettingsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
