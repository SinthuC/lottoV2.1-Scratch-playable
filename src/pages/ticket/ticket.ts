import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { User } from '../../models/user';
import { Ticket } from '../../models/ticket';
import { History } from '../../models/history';
import { GlobalVarible } from '../../app/models';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { PocketMoneyPage } from '../pocket-money/pocket-money';
import { TabsPage } from '../tabs/tabs';
import { ScrathGamePage } from '../scrath-game/scrath-game';
/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {

  ticketCount: number;
  textAward: string;
  coinAward:number;
  ticketAward:number;
  chanceCoin: number;
  rand: any;
  setnumber: any;
  NumScratch: number[];
  time: string = new Date().toLocaleTimeString();
  date: string = new Date().toLocaleDateString();
  user: User;
  ticket: Ticket;
  history: History;
  sl: string;
  fs: string;
  ansgame: any;
  gamedetail: any;
  count: number;
  countsl: number;
  countfs: number;
  countSerialsl: number;
  countSerialfs: number;
  ticketAmount: number;
  color: any = "green";
  tab2Root = PocketMoneyPage;

  constructor(public Toast: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public shared: SharedDataProvider,
    public http: HttpClient) {
    // this.game = "ScratchPoker";
    this.ticket = this.shared.Ticket;
    this.user = this.shared.User;
    this.history = this.shared.History;
    this.ticket.refid = this.user.id;
    this.history.refid = this.user.id;
    this.sl = this.navParams.data.sl
    this.fs = this.navParams.data.fs
  }
  ionViewDidLoad() {
    console.log("test");
    this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + this.user.id)
      .subscribe((data) => {
        this.user = data;
      });
  }
  ionViewWillEnter() {
    console.log("ticket-page")
    if (this.sl == null) {
      this.ticket.game = this.fs;
      this.history.game = this.fs
      this.gamedetail = "Fruity Slot"
    } else {
      this.ticket.game = this.sl;
      this.ticket.game = this.sl;
      this.gamedetail = "Scratch Poker"
    }
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/GetticketGame/sl")
      .subscribe((data) => {
        this.countSerialsl = data.length;

      });
    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/GetticketGame/fs")
      .subscribe((data) => {
        this.countSerialfs = data.length;

      });

    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getticket/" + this.user.id + "/sl")
      .subscribe((data) => {
        this.countsl = data.length;
      });

    this.http.get<Ticket[]>(GlobalVarible.host + "/api/Ticket/Getticket/" + this.user.id + "/fs")
      .subscribe((data) => {
        this.countfs = data.length;
      });

    this.http.get<User>(GlobalVarible.host + "/api/User/Getdoc/" + this.user.id)
      .subscribe((data) => {
        this.user = data;
      });
  }
  //Ticket -> Coin
  checkTicket() {
    if (this.ticketCount > this.user.coin) {
      this.chanceCoin = this.ticketCount;
      this.color = "red";
    } else {
      this.chanceCoin = this.ticketCount;
      this.color = "green";
    }
  }
  presentToast(msg) {
    let toast = this
      .Toast
      .create({ message: msg, duration: 2000 });
    toast.present();
  }
  nextPop() {
    this.navCtrl.pop();
  }
  award9Scratch() {
    this.rand = (Math.floor((Math.random() * 5 + 8))).toString();
    console.log(this.rand)
    this.setnumber = this.rand;
    switch (this.setnumber) {
      case "8": {
        this.NumScratch = [2, 1, 35, 28, 51];
        this.textAward = "Scratch Award 9";
        this.ticketAward = 1;
        this.presentToast("case 8 duo");
        console.log(this.NumScratch);
        break;
      } case "9": {
        this.NumScratch = [44, 40, 35, 31, 21];
        this.textAward = "Scratch Award 9";
        this.ticketAward = 1;
        this.presentToast("case 9 duo");
        console.log(this.NumScratch);
        break;
      } case "10": {
        this.NumScratch = [22, 37, 27, 17, 9];
        this.textAward = "Scratch Award 9";
        this.ticketAward = 1;
        this.presentToast("case 10 duo");
        console.log(this.NumScratch);
        break;
      } case "11": {
        this.NumScratch = [13, 1, 35, 18, 52];
        this.textAward = "Scratch Award 9";
        this.ticketAward = 1;
        this.presentToast("case 11 duo");
        console.log(this.NumScratch);
        break;
      } case "12": {
        this.NumScratch = [37, 38, 21, 11, 3];
        this.textAward = "Scratch Award 9";
        this.ticketAward = 1;
        this.presentToast("case 12 duo");
        console.log(this.NumScratch);
        break;
      }
      default: {
        this.presentToast("case is not");
        break;
      }
    }
  }
  award8Scratch() {
    this.rand = (Math.floor((Math.random() * 5 + 13))).toString();
    console.log(this.rand)
    this.setnumber = this.rand;
    switch (this.setnumber) {
      case "13": {
        this.NumScratch = [2, 22, 28, 11, 35];
        this.textAward = "Scratch Award 8";
        this.coinAward = 2;
        this.presentToast("case 13 duo2");
        console.log(this.NumScratch);
        break;
      } case "14": {
        this.NumScratch = [22, 11, 21, 24, 9];
        this.textAward = "Scratch Award 8";
        this.coinAward = 2;
        this.presentToast("case 14 duo2");
        console.log(this.NumScratch);
        break;
      } case "15": {
        this.NumScratch = [1, 50, 35, 11, 40];
        this.textAward = "Scratch Award 8";
        this.coinAward = 2;
        this.presentToast("case 15 duo2");
        console.log(this.NumScratch);
        break;
      } case "16": {
        this.NumScratch = [19, 20, 27, 14, 45];
        this.textAward = "Scratch Award 8";
        this.coinAward = 2;
        this.presentToast("case 16 duo2");
        console.log(this.NumScratch);
        break;
      } case "17": {
        this.NumScratch = [52, 24, 25, 38, 13];
        this.textAward = "Scratch Award 8";
        this.coinAward = 2;
        this.presentToast("case 17 duo2");
        console.log(this.NumScratch);
        break;
      }
      default: {
        this.presentToast("case is not");
        break;
      }
    }
  }
  award7Scratch() {
    this.rand = (Math.floor((Math.random() * 4 + 18))).toString();
    console.log(this.rand)
    this.setnumber = this.rand;
    switch (this.setnumber) {
      case "18": {
        this.NumScratch = [4, 16, 17, 38, 43];
        this.textAward = "Scratch Award 7";
        this.coinAward = 5;
        this.presentToast("case 18 tong");
        console.log(this.NumScratch);
        break;
      } case "19": {
        this.NumScratch = [46, 24, 33, 2, 20];
        this.textAward = "Scratch Award 7";
        this.coinAward = 5;
        this.presentToast("case 19 tong");
        console.log(this.NumScratch);
        break;
      } case "20": {
        this.NumScratch = [26, 39, 1, 18, 52];
        this.textAward = "Scratch Award 7";
        this.coinAward = 5;
        this.presentToast("case 20 tong");
        console.log(this.NumScratch);
        break;
      } case "21": {
        this.NumScratch = [36, 23, 10, 38, 7];
        this.textAward = "Scratch Award 7";
        this.coinAward = 5;
        this.presentToast("case 21 tong");
        console.log(this.NumScratch);
        break;
      } default: {
        this.presentToast("case is not");
        break;
      }
    }
  }
  award6Scratch() {
    this.rand = (Math.floor((Math.random() * 3 + 22))).toString();
    console.log(this.rand)
    this.setnumber = this.rand;
    switch (this.setnumber) {
      case "22": {
        this.NumScratch = [2, 29, 17, 44, 19];
        this.textAward = "Scratch Award 6";
        this.coinAward = 10;
        this.presentToast("case 22 stage");
        console.log(this.NumScratch);
        break;
      } case "23": {
        this.NumScratch = [20, 21, 35, 49, 11];
        this.textAward = "Scratch Award 6";
        this.coinAward = 10;
        this.presentToast("case 23 stage");
        console.log(this.NumScratch);
        break;
      } case "24": {
        this.NumScratch = [35, 23, 24, 12, 52];
        this.textAward = "Scratch Award 6";
        this.coinAward = 10;
        this.presentToast("case 24 stage");
        console.log(this.NumScratch);
        break;
      } default: {
        this.presentToast("case is not");
        break;
      }
    }
  }
  nowardScratch() {
    this.rand = (Math.floor((Math.random() * 7 + 1))).toString();
    console.log(this.rand)
    this.setnumber = this.rand;
    switch (this.setnumber) {
      case "1": {
        this.NumScratch = [1, 32, 42, 13, 5, 22, 25, 39, 40];
        this.textAward = "No Award";
        this.presentToast("case 1 high");
        console.log(this.NumScratch);
        break;
      }
      case "2": {
        this.NumScratch = [26, 19, 8, 28, 36, 22, 25, 39, 40];
        this.textAward = "No Award";
        this.presentToast("case 2 high");
        console.log(this.NumScratch);
        break;
      }
      case "3": {
        this.NumScratch = [6, 2, 39, 40, 22, 22, 25, 39, 40];
        this.textAward = "No Award";
        this.presentToast("case 3 high");
        console.log(this.NumScratch);
        break;
      }
      case "4": {
        this.NumScratch = [24, 52, 30, 21, 5, 22, 25, 39, 40];
        this.textAward = "No Award";
        this.presentToast("case 4 high");
        console.log(this.NumScratch);
        break;
      }
      case "5": {
        this.NumScratch = [22, 12, 33, 14, 2, 22, 25, 39, 40];
        this.textAward = "No Award";
        this.presentToast("case 5 high");
        console.log(this.NumScratch);
        break;
      } case "6": {
        this.NumScratch = [23, 29, 37, 40, 38, 22, 25, 39, 40];
        this.textAward = "No Award";
        this.presentToast("case 6 high");
        console.log(this.NumScratch);
        break;
      } case "7": {
        this.NumScratch = [41, 31, 35, 23, 51, 22, 25, 39, 40];
        this.textAward = "No Award";
        this.presentToast("case 7 high");
        console.log(this.NumScratch);
        break;
      }
    }
  }
  newCheckTicketScratch() {
    for (let i = 1; i <= this.ticketCount; i++) {
      this.ticketAmount = (this.countsl + 1);
      if (this.ticketAmount == 5) {
        console.log(this.ticketAmount, " reward 9")
        this.award9Scratch();
        this.postticket();
      } else if (this.ticketAmount == 10) {
        console.log(this.ticketAmount, " reward 8")
        this.award8Scratch();
        this.postticket();
      } else if (this.ticketAmount % 930 == 0) {
        console.log(this.ticketAmount, "reward 6")
        this.award6Scratch();
        this.postticket();
        this.ticketAmount = 0;
      } else if (this.ticketAmount % 155 == 0) {
        console.log(this.ticketAmount, "reward 7")
        this.award7Scratch();
        this.postticket();
      } else if (this.ticketAmount % 30 == 0) {
        console.log(this.ticketAmount, "reward 8")
        this.award8Scratch();
        this.postticket();
      } else if (this.ticketAmount % 5 == 0) {
        console.log(this.ticketAmount, "reward 9")
        this.award9Scratch();
        this.postticket();
      }
      else {
        console.log(" no reward ")
        this.nowardScratch();
        this.postticket();
      }
    }
  }

  postticket() {
    this.ticket.setnumber = this.setnumber;
    this.ticket.num = this.NumScratch;
    this.ticket.isplayed = false;
    this.ticket.date = this.date;
    this.ticket.time = this.time;
    this.ticket.textAward = this.textAward;

    if (this.ticket.game = this.sl) {
      this.ticket.no = this.countsl + 1;
      this.ticket.serialnumber = this.countSerialsl + 1;
      this.countSerialsl++;
      this.countsl++;
    }
    else if (this.ticket.game = this.fs) {
      this.ticket.no = this.countfs + 1;
      this.ticket.serialnumber = this.countSerialfs + 1;
      this.countSerialfs++;
      this.countfs++;
    }
    console.log("Number : " + this.ticket.no);
    this.http.post(GlobalVarible.host + "/api/Ticket/Create", JSON.stringify(this.ticket), GlobalVarible.httpOptions)
      .subscribe(data => {

      });
  }
  nextConfirm() {
    if (this.ticketCount > this.user.coin) {
      this.navCtrl.push(TabsPage, { checknum: 1 });
      alert("Your money is not enough.");
    } else if (this.ticketCount == null || this.ticketCount == 0) {
      alert("Your coin null");
    }
    else {
      this.history.date = this.date;
      this.history.time = this.time;
      this.history.type = 1;
      this.history.img = "../../assets/imgs/Ticket.png"
      if (this.history.game = this.sl) {
        this.history.detailgame = "Scratch Poker"
        this.history.amouth = "Buy " + this.ticketCount;
        this.newCheckTicketScratch();
      }
      else if (this.history.game = this.fs) {
        this.history.detailgame = "Fruity Slot"
        this.history.amouth = "Buy " + this.ticketCount;
        this.newCheckTicketScratch();
      }
      // let TIME_IN_MS = 5000;
      // let hideFooterTimeout = setTimeout( () => {
      this.http.post(GlobalVarible.host + "/api/History/Create", JSON.stringify(this.history), GlobalVarible.httpOptions)
        .subscribe(data => {

        });
      // }, TIME_IN_MS);
      this.user.coin = (Number)(this.user.coin) - (Number)(this.chanceCoin);
      this.http.post(GlobalVarible.host + "/api/User/Edit", JSON.stringify(this.user), GlobalVarible.httpOptions)
        .subscribe(data => {
          alert("success !!!");
          this.navCtrl.push(TabsPage, { checknum: 0 });
        });
    }
  }
}

