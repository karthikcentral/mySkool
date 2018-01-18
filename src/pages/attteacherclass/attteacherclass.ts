import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{AttteacherselfPage} from  '../../pages/attteacherself/attteacherself';
import {HometeacherPage} from '../../pages/hometeacher/hometeacher';
@IonicPage()
@Component({
  selector: 'page-attteacherclass',
  templateUrl: 'attteacherclass.html',
})
export class AttteacherclassPage {
  showModalMS;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showModalMS = true;
  }
  
  togglePage(){
    this.navCtrl.push(AttteacherselfPage);
  }

  goHome(){
    this.navCtrl.push(HometeacherPage);
  }

}
