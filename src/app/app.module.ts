import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {MessagesPage} from '../pages/messages/messages';
import {AssignmentsPage} from '../pages/assignments/assignments';
import {TimetablePage} from '../pages/timetable/timetable';
import {AttendancePage} from '../pages/attendance/attendance';
import{AnnouncementsPage} from  '../pages/announcements/announcements';
import{ReportcardPage} from  '../pages/reportcard/reportcard';
import{GalleryPage} from  '../pages/gallery/gallery';
import{EventPage} from  '../pages/event/event';
import{LoginPage} from  '../pages/login/login';
import{GallerydetailPage} from  '../pages/gallerydetail/gallerydetail';
import{AttteacherselfPage} from  '../pages/attteacherself/attteacherself';
import{AttteacherclassPage} from  '../pages/attteacherclass/attteacherclass';
import{TimetableteacherPage} from  '../pages/timetableteacher/timetableteacher';
import{HometeacherPage} from  '../pages/hometeacher/hometeacher';
import{NoticeboardPage} from  '../pages/noticeboard/noticeboard';
import{ActivitiesPage} from  '../pages/activities/activities';
import{StudentprofilePage} from  '../pages/studentprofile/studentprofile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DiaryComponent } from '../components/diary/diary';
import { SummaryPage } from '../pages/summary/summary';
import { CalendarPage } from '../pages/calendar/calendar';
import { ApplyleavePage } from '../pages/applyleave/applyleave';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { TimetablewrapperPage } from '../pages/timetablewrapper/timetablewrapper';
import { ProfilePage } from '../pages/profile/profile';
import { ProfilewrapperPage } from '../pages/profilewrapper/profilewrapper';
import { ConnectsPage } from '../pages/connects/connects';
import { SettingsPage } from '../pages/settings/settings';
import { ProfilewrapperPageModule } from '../pages/profilewrapper/profilewrapper.module';
import { ConnectsPageModule } from '../pages/connects/connects.module';
import { SettingsPageModule } from '../pages/settings/settings.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DiaryComponent,
    MessagesPage,
    AssignmentsPage,
    TimetablePage,
    AttendancePage,
    AnnouncementsPage,
    ReportcardPage,
    GalleryPage,
    EventPage,
    LoginPage,
    GallerydetailPage,
    AttteacherselfPage,
    AttteacherclassPage,
    TimetableteacherPage,
    HometeacherPage,
    NoticeboardPage,
    ActivitiesPage,
    StudentprofilePage,
    SummaryPage,
    CalendarPage,
    ApplyleavePage,
    TimetablewrapperPage,
    ProfilePage,
    ProfilewrapperPage,
    ConnectsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MessagesPage,
    AssignmentsPage,
    TimetablePage,
    AttendancePage,
    AnnouncementsPage,
    ReportcardPage,
    GalleryPage,
    EventPage,
    LoginPage,
    GallerydetailPage,
    AttteacherselfPage,
    AttteacherclassPage,
    TimetableteacherPage,
    HometeacherPage,
    NoticeboardPage,
    ActivitiesPage,
    StudentprofilePage,
    SummaryPage,
    CalendarPage,
    ApplyleavePage,
    TimetablewrapperPage,
    ProfilePage,
    ProfilewrapperPage,
    ConnectsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
