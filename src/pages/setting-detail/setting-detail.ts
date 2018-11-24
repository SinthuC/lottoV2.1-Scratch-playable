import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { Ticket } from '../../models/ticket';
import { GlobalVarible } from '../../app/models';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { User } from '../../models/user';
/**
 * Generated class for the SettingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-detail',
  templateUrl: 'setting-detail.html',
})

export class SettingDetailPage {
  item;
  user:User;
  ticket:Ticket;
  constructor(public http:HttpClient, public navCtrl: NavController, public navParams: NavParams,private shared:SharedDataProvider) {
    this.ticket = this.shared.Ticket;
    
  }

  ionViewDidLoad() {
    console.log(this.ticket);
  }

}
