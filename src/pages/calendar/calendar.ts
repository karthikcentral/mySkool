import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  numbers;
  calenMonth = '01';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.frameData('01');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

  frameData(n){
    console.log("2018-"+n);
    console.log(moment("2018-"+n, "YYYY-MM").daysInMonth());
    let items =[{status : "Holiday",  color : "Orange"},{status: "Present", color:"Green"},{status: "Absent", color:"Red"},{status: "Weedend", color:"lightGreen"}]
    this.numbers = [];
    for(var i=0; i<moment("2018-"+n, "YYYY-MM").daysInMonth();i++){
      this.numbers.push(items[Math.floor(Math.random()*items.length)]);
    }
  }

}
