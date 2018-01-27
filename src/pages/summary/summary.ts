import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  chart;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.chart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data:  {
        labels: ["Present", "Absent"],
        datasets: [{
            label: 'Attendance Data',
            data: [120, 10],
            backgroundColor: [
                '#FF6384',
                '#36A2EB'
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB"
            ]
        }]
    }
  });
  }

}
