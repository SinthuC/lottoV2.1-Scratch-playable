import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
import { SettingDetailPage } from '../setting-detail/setting-detail';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})

export class SettingPage {
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        'title': 'Help',        
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        
      },
      {
        'title': 'Provision',        
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        
      },
      {
        'title': 'Contact',        
        'description': 'The official mascot of the Linux kernel!',
       
      },
      {
        'title': 'Currency',        
        'description': 'The official mascot of the Linux kernel!',
       
      },
    ]
  }

  openSettingDetaillPage(item) {
    this.navCtrl.push(SettingDetailPage, { item: item });
  }
home(){
  this.navCtrl.push(TabsPage);
}
}
