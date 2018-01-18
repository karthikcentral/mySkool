import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{AttteacherclassPage} from  '../../pages/attteacherclass/attteacherclass';
import {HometeacherPage} from '../../pages/hometeacher/hometeacher';

@IonicPage()
@Component({
  selector: 'page-attteacherself',
  templateUrl: 'attteacherself.html',
})
export class AttteacherselfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttteacherselfPage');
  }

  togglePage(){
    this.navCtrl.push(AttteacherclassPage);
  }

  goHome(){
    this.navCtrl.push(HometeacherPage);
  }

}
