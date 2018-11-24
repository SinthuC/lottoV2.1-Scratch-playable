import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { GlobalVarible } from '../../app/models';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { EditPage } from '../edit/edit';
import { User } from '../../models/user';
import { Ticket } from '../../models/ticket';
/**
 * Generated class for the TicketSlotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-slot',
  templateUrl: 'ticket-slot.html',
})
export class TicketSlotPage {
user:User;
ticket:Ticket;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,public alertCtrl:AlertController) {
    
  }

  ionViewWillEnter() {
    this.http.get<User>(GlobalVarible.host + "/api/User/List")
  .subscribe((data) => {
    this.user = data;
  });
  this.http.get<Ticket>(GlobalVarible.host + "/api/Ticket/List")
  .subscribe((data) => {
    this.ticket = data;
  });
}

  ionViewDidLoad() {
      this.http.get<User>(GlobalVarible.host + "/api/User/List")
    .subscribe((data) => {
      this.user = data;
    });
  }

  Delete(id: string) {
    const confirm = this.alertCtrl.create({
      title: "Delete '" + id + "' ?",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.http.post(GlobalVarible.host + "/api/User/Delete/" + id, {}, GlobalVarible.httpOptions)
              .subscribe(data => {
                this.ionViewDidLoad();
              });
          }
        }
      ]
    });
    confirm.present();
  }
  Edit(id: string) {
    this.navCtrl.push(EditPage, {idapi:id})
  }
}
