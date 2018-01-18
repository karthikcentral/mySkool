import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HometeacherPage} from '../../pages/hometeacher/hometeacher';


@IonicPage()
@Component({
  selector: 'page-studentprofile',
  templateUrl: 'studentprofile.html',
})
export class StudentprofilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentprofilePage');
  }

  goHome(){
    this.navCtrl.push(HometeacherPage);
  }

}
