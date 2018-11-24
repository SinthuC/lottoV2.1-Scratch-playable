import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { TicketPage } from '../ticket/ticket';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { Ticket } from '../../models/ticket';
import { GlobalVarible } from '../../app/models';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { User } from '../../models/user';
import { SettingDetailPage } from '../setting-detail/setting-detail';
import { ScratchGamePlayPage } from '../scratch-game-play/scratch-game-play';
import { HowtoScratchPage } from '../howto-scratch/howto-scratch';

/**
 * Generated class for the ScrathGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scrath-game',
  templateUrl: 'scrath-game.html',
})
export class ScrathGamePage {
  ticket:Ticket[];
  ticket2:Ticket[];
  user:User;
  sl="sl";
  count:number;
  card:any;
  constructor(public http:HttpClient, public navCtrl: NavController, public navParams: NavParams,private shared:SharedDataProvider,public modalCtrl: ModalController) {
    this.user = shared.User;

  }

  ionViewWillLoad() {

    // this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getticket/" + this.user.id + "/sl" + "/false")
    // .subscribe((data) => {
    //   this.ticket = data;
    //   // this.count = data.length;
    // });
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getstatus/" + this.user.id + "/sl" + "/false")
    .subscribe((data) => {
      this.ticket = data;
      this.count = data.length;
    });
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getstatus/" + this.user.id + "/sl" + "/true")
    .subscribe((data) => {
      this.ticket2 = data;
     
    });
  }
  

  ionViewWillEnter() {
    console.log("scrathGame-page")
    // this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getticket/" + this.user.id + "/sl")
    // .subscribe((data) => {
    //   this.ticket = data;
    //   // this.count = data.length;
    // });
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getstatus/" + this.user.id + "/sl" + "/false")
    .subscribe((data) => {
      this.ticket = data;
      this.count = data.length;
    });
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getstatus/" + this.user.id + "/sl" + "/true")
    .subscribe((data) => {
      this.ticket2 = data;
     
    });

}

  nextTicket(sl:string){
    this.navCtrl.push(TicketPage,{sl:this.sl});
  }

  NextGame(id:string){
    this.http.get<Ticket>(GlobalVarible.host + "/api/Ticket/Get/" + id)
    .subscribe((data) => {
      this.shared.Ticket = data;
      for(let i =0 ;i<4;i++){
        this.shared.Ticket.num.push(Math.floor(Math.random() * 52) + 1 );
      }  
      console.log(this.shared.Ticket);
      this.navCtrl.push(ScratchGamePlayPage);    
    });
  }

  goToResult(id:string){
    this.http.get<Ticket>(GlobalVarible.host + "/api/Ticket/Get/" + id)
    .subscribe((data) => {
      this.shared.Ticket = data;  
      var modalPage = this.modalCtrl.create('ModalSuccessPage', { selectedBlock: data.num, }); modalPage.present(); 
      
         
    });
  }

  HowtoScrath(){
    this.navCtrl.push(HowtoScratchPage)
  }

}
