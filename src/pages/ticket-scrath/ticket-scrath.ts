import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVarible } from '../../app/models';
import { HttpClient } from '@angular/common/http';
import { TicketSlotPage } from '../ticket-slot/ticket-slot';
import { HomePage } from '../home/home';
import { User } from '../../models/user';
import { Ticket } from '../../models/ticket';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
/**
 * Generated class for the TicketScrathPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-scrath',
  templateUrl: 'ticket-scrath.html',
})
export class TicketScrathPage {

  user:User = new User();
  ticket:Ticket = new Ticket();
  constructor(public shared:SharedDataProvider,public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.ticket = this.shared.Ticket;
    this.user = this.shared.User;
    this.ticket.refid = this.user.id;
  }

  ionViewDidEnter() {
    // this.http.get<Test>(GlobalVarible.host + "/api/Test/List")
    // .subscribe((data) => {
    //   this.test = data;
    // });
  }

  Create(){
    this.ticket.setnumber = (Math.floor((Math.random() * 6) + 1));

    this.http.post(GlobalVarible.host + "/api/Ticket/Create", JSON.stringify(this.ticket), GlobalVarible.httpOptions)
    .subscribe(data => {
      
      this.navCtrl.push(TicketSlotPage);
    });
  }


  NextList(){
    this.navCtrl.push(TicketSlotPage);
  }
}
