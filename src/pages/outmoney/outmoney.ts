import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVarible } from '../../app/models';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { User } from '../../models/user';
import { History } from '../../models/history';
/**
 * Generated class for the OutmoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-outmoney',
  templateUrl: 'outmoney.html',
})
export class OutmoneyPage {
  user: User;
  name: any;
  money: number;
  history: History;
  userme:any;
  date: string = new Date().toLocaleDateString();
  time: string = new Date().toLocaleTimeString();
  constructor(public navCtrl: NavController, public navParams: NavParams, public shared: SharedDataProvider, public http: HttpClient) {
    this.user = this.shared.User;
    this.history = this.shared.History;
    this.history.refid = this.user.id;
  }

  ionViewDidLoad() {

    this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + this.user.id)
      .subscribe((data) => {
        this.user = data;
      });
  }
  ionViewWillEnter() {
    this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + this.user.id)
      .subscribe((data) => {
        this.user = data;
      });
  }
  confirm() {
    if (this.name != this.user.name) {
      if (this.money <= this.user.money && this.money > 0) {
        this.http.get<User>(GlobalVarible.host + "/api/User/GetUsername/" + this.name)
          .subscribe((data) => {
            if (data != null) {
              // money friend
              this.user = this.shared.User;
              this.userme = this.user.name
              this.history.date = this.date;
              this.history.time = this.time;
              this.history.type =2
              this.history.img = "../../assets/imgs/Coin_BHT.png"
              this.history.amouth = "Out " + this.money;
              this.history.game = "outmoney";
              this.history.detailgame = "To  " + this.name;
              this.http.post(GlobalVarible.host + "/api/History/Create", JSON.stringify(this.history), GlobalVarible.httpOptions)
                .subscribe(data => {

                });

              this.user = data;
              this.history.refid = this.user.id;
              this.history.date = this.date;
              this.history.time = this.time;
              this.history.type = 2;
              this.history.img = "../../assets/imgs/Coin_BHT.png"
              this.history.amouth = "Get " + this.money;
              this.history.game = "outmoney";
              this.history.detailgame = "From " + this.userme;
              this.http.post(GlobalVarible.host + "/api/History/Create", JSON.stringify(this.history), GlobalVarible.httpOptions)
                .subscribe(data => {

                });
              this.user.money = (Number)(this.user.money) + (Number)(this.money);
              this.http.post(GlobalVarible.host + "/api/User/Edit", JSON.stringify(this.user), GlobalVarible.httpOptions)
                .subscribe(data => {

                });
              // history out money

              // money me
              this.user = this.shared.User;
              this.user.money = (Number)(this.user.money) - (Number)(this.money);
              this.http.post(GlobalVarible.host + "/api/User/Edit", JSON.stringify(this.user), GlobalVarible.httpOptions)
                .subscribe(data => {
                  this.navCtrl.pop();
                });
            } else {
              alert("Not found username");
            }
          });
      } else {
        alert("Money Over");
      }
    } else {
      alert("Username Error");
    }
  }

}
