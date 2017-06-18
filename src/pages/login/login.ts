import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  showLogin: boolean = true;
  email: string = '';
  password: string = '';
  name: string = '';
  forgetPasswordUrl = '';
  confirmPassword: string = '';
  contactNumber: string = '';
  username: string = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    
  }

  /*
  for both of these, if the right form is showing, process the form,
  otherwise show it
  */
  doLogin() {
    
  }

  doRegister() {
    
  }

}