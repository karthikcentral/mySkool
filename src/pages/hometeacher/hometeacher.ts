import { Component,ViewChild } from '@angular/core';
import { NavController  } from 'ionic-angular';
import {AttteacherselfPage} from '../../pages/attteacherself/attteacherself';
import {LoginPage} from '../../pages/login/login';
import {TimetableteacherPage} from '../../pages/timetableteacher/timetableteacher';
import {StudentprofilePage} from '../../pages/studentprofile/studentprofile';

@Component({
  selector: 'page-hometeacher',
  templateUrl: 'hometeacher.html',
})
export class HometeacherPage {
  user : any = {};
  
  constructor(public navCtrl: NavController) {
    this.user.name = 'Karthik';
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
    this.navCtrl.push(AttteacherselfPage);
  }

  goTimetable(){
    this.navCtrl.push(TimetableteacherPage);
  }

  goStudent(){
    this.navCtrl.push(StudentprofilePage);
  }
}
