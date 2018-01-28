import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-reportcard',
  templateUrl: 'reportcard.html',
})
export class ReportcardPage {
  @ViewChild('unitTest') unitTest;
  @ViewChild('surpriseTest') surpriseTest;
  chart;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.chart = new Chart(this.unitTest.nativeElement, {
      type: 'line',
      data :  {
        labels: ["June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          label: "Unit Test",
          data: [0, 59, 75, 20, 20, 55, 40],
        }]
      },
      options : {
        legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 80,
          fontColor: 'black'
        }
      }}
  });

  new Chart(this.surpriseTest.nativeElement, {
    type: 'line',
    data :  {
      labels: ["June", "July", "August", "September", "October", "November", "December"],
      datasets: [{
        label: "Term Test",
        data: [0, 50, 90, 50, 40, 66, 40],
      }]
    },
    options : {
      legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 80,
        fontColor: 'black'
      }
    }}
});
  }
  goHome(){
    this.navCtrl.push(HomePage);
  }

}
