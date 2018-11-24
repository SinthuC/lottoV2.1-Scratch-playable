import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { User } from '../../models/user';
import { History } from '../../models/history';
import { GlobalVarible } from '../../app/models';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { TabsPage } from '../tabs/tabs';
import { ScrathGamePage } from '../scrath-game/scrath-game';
import { FruityGamePage } from '../fruity-game/fruity-game';
/**
 * Generated class for the AlarmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alarm',
  templateUrl: 'alarm.html',
})
export class AlarmPage {
  user: User;
  history: History;
  sta: boolean = false;

  constructor(public shared: SharedDataProvider, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    this.user = shared.User;
  }

  ionViewWillEnter() {
    console.log("alarm-page")
    this.http.get<History>(GlobalVarible.host + "/api/History/GetHistory/" + this.user.id + "/2")
      .subscribe((data) => {
        this.history = data;
      });
  }

  ionViewDidLoad() {
    this.http.get<History>(GlobalVarible.host + "/api/History/GetHistory/" + this.user.id + "/2")
      .subscribe((data) => {
        this.history = data;
      });



  }
  nextHistory(game: string) {
    console.log(game);
    if (game == "sl") {
      this.navCtrl.push(ScrathGamePage);
    }else if(game == "fs"){
      this.navCtrl.push(FruityGamePage)

    }else if (game == "coin" || game == "outmoney") {
      this.navCtrl.push(TabsPage, { checknum: 1 });
    }
  }



}
