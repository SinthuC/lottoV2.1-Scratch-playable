import { Component } from '@angular/core';
import { NavController, MenuController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ScrathGamePage } from '../scrath-game/scrath-game';
import { TicketPage } from '../ticket/ticket';
import { FruityGamePage } from '../fruity-game/fruity-game';
import { User } from '../../models/user';
import { GlobalVarible } from '../../app/models';
import { HttpClient } from '@angular/common/http'
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { Ticket } from '../../models/ticket';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:User;
  ticket:Ticket[];
  sl = "sl";
  fs = "fs";
  countsl:number;
  countfs:number;
  constructor(public http:HttpClient, public navParams: NavParams,  public navCtrl: NavController,public menuCtrl: MenuController,private shared:SharedDataProvider) {
    this.user = shared.User;
    
  }

  ionViewWillEnter() {
    console.log("home-page")
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getticket/" + this.user.id + "/sl")
    .subscribe((data) => {
      this.ticket = data;
    });
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getstatus/" + this.user.id + "/sl" + "/false")
    .subscribe((data) => {
      this.countsl = data.length;
    });

    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getticket/" + this.user.id + "/fs")
    .subscribe((data) => {
      this.ticket = data;
    });
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getstatus/" + this.user.id + "/fs" + "/false")
    .subscribe((data) => {
      this.countfs = data.length;
    });
  }
  ionViewDidLoad() {
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getticket/" + this.user.id + "/sl")
    .subscribe((data) => {
      this.ticket = data;
    });
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getstatus/" + this.user.id + "/sl" + "/false")
    .subscribe((data) => {
      this.countsl = data.length;
    });

    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getticket/" + this.user.id + "/fs")
    .subscribe((data) => {
      this.ticket = data;
    });
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getstatus/" + this.user.id + "/fs" + "/false")
    .subscribe((data) => {
      this.countfs = data.length;
    });
  }


  back(){
    this.navCtrl.push(LoginPage);
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }

  nextTicketsl(sl:string){
    this.navCtrl.push(TicketPage,{sl:this.sl});
  }
  nextTicketfs(fs:string){
    this.navCtrl.push(TicketPage,{fs:this.fs});
  }
  nextGame(){
    this.navCtrl.push(ScrathGamePage);
  }
  nextFruity(){
    this.navCtrl.push(FruityGamePage);
  }

}
