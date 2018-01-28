import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimetablePage } from '../timetable/timetable';

@IonicPage()
@Component({
  selector: 'page-timetablewrapper',
  templateUrl: 'timetablewrapper.html',
})

export class TimetablewrapperPage {
  selected : any;
  slots : any; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selected = TimetablePage.selectedTab;
    this.frameData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimetablewrapperPage');
  }

  frameData(){
    this.slots = [];
    let times : any = [{start: '8:00', end : '9:00'},{start: '9:00', end : '10:00'},{start: '10:00', end : '11:00'},{start: '11:00', end : '12:00'},{start: '1:00', end : '2:00'},{start: '2:00', end : '3:00'},{start: '3:00', end : '4:00'}];
    let subject = ['English', 'Arabic', 'Maths', 'P.E.T', 'Science', 'History', 'Geography'];
    for(var i=0; i< times.length; i++){
      times[i].subject = subject[Math.floor(Math.random()*subject.length)]
      this.slots.push(times[i]);
    }
  }

}
