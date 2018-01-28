import { Component,ViewChild } from '@angular/core';
import { NavController  } from 'ionic-angular';
import {AttendancePage} from '../../pages/attendance/attendance';
import {LoginPage} from '../../pages/login/login';
import {TimetablePage} from '../../pages/timetable/timetable';
import {ReportcardPage} from '../../pages/reportcard/reportcard';
import {GalleryPage} from '../../pages/gallery/gallery';
import {NoticeboardPage} from '../../pages/noticeboard/noticeboard';
import{ActivitiesPage} from  '../../pages/activities/activities';

import { NgStyle } from '@angular/common';
import { ProfilePage } from '../profile/profile';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user : any = {};
  
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    
  }
  rowHeight(){
      var sec1H = 250;
      var overH = window.screen.height;
      var sec2H = overH-sec1H-20;
      var rowH = sec2H/3;
      return {'height' : rowH+'px', 'text-align' : 'center', 'align-items' : 'center' };
  }

  getSection(){
      var sec1H = 250;
      var overH = window.screen.height;
      var sec2H = overH-sec1H-20;
      return {'height' : sec2H+'px' };
  }

  goAtten(){
    this.navCtrl.push(AttendancePage);
  }

  goTimetable(){
    this.navCtrl.push(TimetablePage);
  }

  goAcademic(){
    this.navCtrl.push(ReportcardPage);
  }

  goNotice(){
    this.navCtrl.push(NoticeboardPage);
  }

  goActivity(){
    this.navCtrl.push(ActivitiesPage);    
  }

  goMedia(){
    this.navCtrl.push(GalleryPage);
  }

  goAnnouncement(){

  }

  goProfile(){
    this.navCtrl.push(ProfilePage);
  }


}
