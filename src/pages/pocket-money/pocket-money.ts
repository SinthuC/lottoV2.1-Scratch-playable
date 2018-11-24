import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { User } from '../../models/user';
import { History } from '../../models/history';
import { GlobalVarible } from '../../app/models';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { WebPage } from '../web/web';
import { BuycoinPage } from '../buycoin/buycoin';
import { OutmoneyPage } from '../outmoney/outmoney';

/**
 * Generated class for the PocketMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pocket-money',
  templateUrl: 'pocket-money.html',
})
export class PocketMoneyPage {
  user:User;
  history:History;
  constructor(public http:HttpClient, public shared:SharedDataProvider, public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController,public menuCtrl: MenuController,) {
    this.user = shared.User;
    // this.history = shared.History;
    
  }

  ionViewDidLoad() {

    this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + this.user.id)
    .subscribe((data) => {
        this.user = data;
    });
  
    this.http.get<History>(GlobalVarible.host + "/api/History/GetHistory/" + this.user.id  + "/1")
    .subscribe((data) => {
      this.history = data;
    });
  }

  ionViewWillEnter() {
    console.log("pocketMoney-page")
    this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + this.user.id)
    .subscribe((data) => {
        this.user = data;
    });
  
    this.http.get<History>(GlobalVarible.host + "/api/History/GetHistory/" + this.user.id + "/1")
    .subscribe((data) => {
      this.history = data;
    });
  }
  // show(item){
  //   {
  //     const alert = this.alertCtrl.create({
  //       title: item.Date + "<br>",
  //       subTitle: item.Amount + "<br>" +item.Type,       
  //       buttons: ['OK']
  //     });
  //     alert.present();
  //   }

  // }
  alertMoney(){
    let alert = this.alertCtrl.create({
      title: 'Add Line',
      subTitle: '@lotto',
      buttons: ['OK']
    });
    alert.present();
    
  }

  buycoin() {
      this.navCtrl.push(BuycoinPage);
  }

  outmoney(){
    this.navCtrl.push(OutmoneyPage);
  }

}
