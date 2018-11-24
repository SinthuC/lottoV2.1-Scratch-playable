import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { TicketScrathPage } from '../ticket-scrath/ticket-scrath';
import { User } from '../../models/user';
import { GlobalVarible } from '../../app/models';
import { HttpClient } from '@angular/common/http'
import { SharedDataProvider } from '../../providers/shared-data/shared-data'
import { RegisterPage } from '../register/register';
import { WebPage } from '../web/web';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  name: any;
  password: any;
  constructor(private shared: SharedDataProvider, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillEnter() {
    console.log("login-page")
    this.name = null;
    this.password = null;
  }

  nextHome() {
    this.http.get<User>(GlobalVarible.host + "/api/User/Get/" + this.name + "/" + this.password)
      .subscribe(data => {
        this.shared.User = data;
        if (data == null) {
          alert("not wrong");
        } else {
          this.navCtrl.push(TabsPage);
        }
      });
  }
  register() {
    this.navCtrl.push(RegisterPage);
  }
  money() {
    this.navCtrl.push(WebPage);
  }
}

