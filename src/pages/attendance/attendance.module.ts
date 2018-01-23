import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendancePage } from './attendance';
import { SummaryPage } from '../summary/summary';
import { CalendarPage } from '../calendar/calendar';
import { ApplyleavePage } from '../applyleave/applyleave';

@NgModule({
  declarations: [
    AttendancePage,
    SummaryPage,
    CalendarPage,
    ApplyleavePage
  ],
  imports: [
    IonicPageModule.forChild(AttendancePage),
  ],
  exports: [
    AttendancePage,
    SummaryPage,
    CalendarPage,
    ApplyleavePage
  ]
})
export class AttendancePageModule {
    summaryPage : any =  SummaryPage;
    calendarPage : any = CalendarPage;
    applyleavePage : any = ApplyleavePage;

}
