import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PocketMoneyPage } from '../pocket-money/pocket-money';
import { AlarmPage } from '../alarm/alarm';
import { User } from '../../models/user';
import { History } from '../../models/history';
import { GlobalVarible } from '../../app/models';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
tab1Root = HomePage;
tab2Root = PocketMoneyPage;
tab3Root = AlarmPage;
user:User;
history:History;
alarmCount:number;
check:number = 0;
num:number = 0;
  constructor(public menuCtrl: MenuController,public shared:SharedDataProvider, public http:HttpClient, public navCtrl: NavController, public navParams: NavParams) {
  this.user = shared.User;
  this.check = this.navParams.get("check");
  this.num = this.navParams.get("checknum");

  
  }
  ionViewWillEnter() {
    console.log("Ok Will Enter");
    this.http.get<History[]>(GlobalVarible.host + "/api/History/GetHistory/" + this.user.id + "/2")
    .subscribe((data) => {
      this.alarmCount = data.length;
    });

    this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + this.user.id)
    .subscribe((data) => {
        this.user = data;
    });
  }
  ionViewDidLoad() {
    console.log("Ok Did Load");
    // this.http.get<History[]>(GlobalVarible.host + "/api/History/GetHistory/" + this.user.id + "/2")
    // .subscribe((data) => {
    //   this.alarmCount = data.length;
    // });

    // this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + this.user.id)
    // .subscribe((data) => {
    //     this.user = data;
    // });
  }
  ionViewDidEnter(){
    console.log("Ok Did Enter");
  }
  ionViewWillLeave(){
    console.log("Ok Will leave");
  }
  ionViewDidLeave(){
    console.log("OK Did leave");
  }
  ionViewWillUnload(){
    console.log("Ok Will unload");
  }



}
