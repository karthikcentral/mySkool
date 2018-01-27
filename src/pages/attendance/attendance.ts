import { Component,trigger, state, style, animate, transition } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import moment from 'moment';
import {HomePage} from '../../pages/home/home';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { CalendarPage } from '../calendar/calendar';
import { SummaryPage } from '../summary/summary';
import { ApplyleavePage } from '../applyleave/applyleave';


@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
  animations: [
    trigger('expand', [
      state('true', style({ height: '110%' })),
      state('false', style({ height: '0'})),
      transition('void => *', animate('0s')),
      transition('* <=> *', animate('250ms ease-in-out'))
    ])
  ]
})
export class AttendancePage {

  summaryRoot = SummaryPage;
  calendarRoot = CalendarPage;
  applyLeaveRoot = ApplyleavePage;
  

  monthList : any;
  userData :any;
  page1 = SummaryPage;
  page2 = CalendarPage;
  page3 = ApplyleavePage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userData = this.getData().month;
    this.monthList = this.frameSwiper();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
  }

  toggleGroup(group){
    group.active = !group.active;
  }

  goHome(){
    this.navCtrl.push(HomePage);
  }

  frameSwiper(){
    var value = [];
    for(var i=11;i>=0;i--){
    var dal = moment().subtract(i, 'months');
    var valu = this.zellerAlgo(dal);
    value.push({ "ind" : i, "momentOjb" : dal, "calendar" : valu, "active" : false});
    }
    return value;
    };

    zellerAlgo (num){
      var startWeek = moment(num).startOf('month').week();
      var endWeek = moment(num).endOf('month').week();
      var calendar = []
      for(var week = startWeek; week<=endWeek;week++){
      var daysarr = [];
      for(var l=0; l <7; l++){
      daysarr.push(moment(num).week(week).startOf('week').clone().add(l, 'day'))
      }
      calendar.push({
      week:week,
      days :daysarr
      })
      }
      return calendar;
      };

  getData(){
    return {
      month : [
        {
          name : "January"
        },
        {
          name : "Feburary"
        },
        {
          name : "March"
        },
        {
          name : "April"
        },
        {
          name : "May"
        },
        {
          name : "June"
        },
        {
          name : "July"
        },
        {
          name : "August"
        },
        {
          name : "September"
        },
        {
          name : "October"
        },
        {
          name : "November"
        },
        {
          name : "December"
        }

      ]
    }
  }

}
