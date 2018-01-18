import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { HometeacherPage } from '../../pages/hometeacher/hometeacher';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public static registerCredentials = { email: 'student', password: 'Password1' };
  loginData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loginData = { email: 'student', password: 'Password1' };
  }

  public login() {
    
    LoginPage.registerCredentials = this.loginData;
    if(LoginPage.registerCredentials.email.toLowerCase() == 'student'){
      this.navCtrl.setRoot(HomePage);
    }
    else if(LoginPage.registerCredentials.email.toLowerCase() == 'staff'){
      this.navCtrl.setRoot(HometeacherPage)
    }
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
