import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import { SummaryPage } from '../summary/summary';
import { TimetablewrapperPage } from '../timetablewrapper/timetablewrapper';

@IonicPage()
@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html',
})
export class TimetablePage {
  page3 = TimetablewrapperPage;
  public static selectedTab = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimetablePage');
  }
  
  onTabSelect(ev: any) {
    TimetablePage.selectedTab = ev.index;
  }

  goHome(){
    this.navCtrl.push(HomePage);
  }
}
