import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TicketPage } from '../ticket/ticket';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { Ticket } from '../../models/ticket';
import { User } from '../../models/user';
import { GlobalVarible } from '../../app/models';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { HowtoSlotPage } from '../howto-slot/howto-slot';
/**
 * Generated class for the FruityGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fruity-game',
  templateUrl: 'fruity-game.html',
})
export class FruityGamePage {
  Num: number[] = [];
  ticket:Ticket[];
  ticket2:Ticket[];
  user:User;
  fs="fs";
  count:number;
  constructor(public http:HttpClient, public navCtrl: NavController, public navParams: NavParams, public shared: SharedDataProvider) {
    this.user = shared.User;
  }


  ionViewWillLoad() {

    // this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getticket/" + this.user.id + "/sl" + "/false")
    // .subscribe((data) => {
    //   this.ticket = data;
    //   // this.count = data.length;
    // });
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getstatus/" + this.user.id + "/fs" + "/false")
    .subscribe((data) => {
      this.ticket = data;
      this.count = data.length;
    });
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getstatus/" + this.user.id + "/fs" + "/true")
    .subscribe((data) => {
      this.ticket2 = data;
     
    });
  }
  

  ionViewWillEnter() {
    console.log("fruityGame")
    // this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getticket/" + this.user.id + "/sl")
    // .subscribe((data) => {
    //   this.ticket = data;
    //   // this.count = data.length;
    // });
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getstatus/" + this.user.id + "/fs" + "/false")
    .subscribe((data) => {
      this.ticket = data;
      this.count = data.length;
    });
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getstatus/" + this.user.id + "/fs" + "/true")
    .subscribe((data) => {
      this.ticket2 = data;
     
    });

}

  nextTicket(fs:string){
    this.navCtrl.push(TicketPage,{fs:this.fs});
  }

  NextGame(){
    alert("つづく !!!");
  }
  HowtoSlot(){
    this.navCtrl.push(HowtoSlotPage)
  }

}
