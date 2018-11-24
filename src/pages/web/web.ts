import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { History } from '../../models/history';
import { GlobalVarible } from '../../app/models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { PocketMoneyPage } from '../pocket-money/pocket-money';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the WebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-web',
  templateUrl: 'web.html',
})
export class WebPage {
  user: User;
  history: History;
  name: any;
  moneyFinal: number;
  date: string = new Date().toLocaleDateString();
  time: string = new Date().toLocaleTimeString();
  constructor(public navCtrl: NavController, public navParams: NavParams, public shared: SharedDataProvider,
    public http: HttpClient,private alertCtrl: AlertController) {
      this.history = this.shared.History;
  }

  change() {
    this.http.get<User>(GlobalVarible.host + "/api/User/GetUsername/" + this.name)
      .subscribe((data) => {
        if(data != null){
        this.user = data;
        this.history.refid = this.user.id;
        this.history.date = this.date;
        this.history.time = this.time;
        this.history.type = 2;
        this.history.img = "../../assets/imgs/Coin_BHT.png"
        this.history.amouth = "Get " + this.moneyFinal;
        this.history.game = "moneyadmin";
        this.history.detailgame = "From Admin";
        this.http.post(GlobalVarible.host + "/api/History/Create", JSON.stringify(this.history), GlobalVarible.httpOptions)
          .subscribe(data => {

          });
        this.user = data;
        this.user.money = (Number)(this.user.money) + (Number)(this.moneyFinal);
        this.http.post(GlobalVarible.host + "/api/User/Edit", JSON.stringify(this.user), GlobalVarible.httpOptions)
          .subscribe(data => {
            alert("success !!!");
            this.navCtrl.pop();
          });
        }else{
          alert("Not found username");
        }
      });

  }



}
