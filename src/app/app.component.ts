import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {MessagesPage} from '../pages/messages/messages';
import {AssignmentsPage} from '../pages/assignments/assignments';
import {TimetablePage} from '../pages/timetable/timetable';
import {AttendancePage} from '../pages/attendance/attendance';
import{AnnouncementsPage} from  '../pages/announcements/announcements';
import{ReportcardPage} from  '../pages/reportcard/reportcard';
import{GalleryPage} from  '../pages/gallery/gallery';
import{LoginPage} from  '../pages/login/login';
import{GallerydetailPage} from  '../pages/gallerydetail/gallerydetail';
import{AttteacherselfPage} from  '../pages/attteacherself/attteacherself';
import{AttteacherclassPage} from  '../pages/attteacherclass/attteacherclass';
import{NoticeboardPage} from  '../pages/noticeboard/noticeboard';
import{ActivitiesPage} from  '../pages/activities/activities';
import{StudentprofilePage} from  '../pages/studentprofile/studentprofile';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = StudentprofilePage;
  rootPage: any = HomePage;
  activePage :any;

  pages: Array<{title: string, component: any, icon : any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Attendance', component: HomePage, icon : "ios-home-outline" },
      { title: 'Academics', component: MessagesPage, icon : "ios-text-outline"  },
      { title: 'Student Board', component: AssignmentsPage, icon : "md-clipboard"  },
      { title: 'Timetable', component: AttendancePage, icon : "ios-calendar-outline"  },
      { title: 'Other Activities', component: TimetablePage, icon : "ios-calendar-outline"  },
      { title: 'Media', component: GalleryPage, icon : "ios-images-outline"  }
    ];
    this.activePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  } 
}
