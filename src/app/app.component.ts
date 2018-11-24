import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SettingPage } from '../pages/setting/setting';
//import { User } from '../models/user';
import { SharedDataProvider } from '../providers/shared-data/shared-data';
//import { ShowresultPage } from '../pages/showresult/showresult';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage
  constructor(private screenOrientation: ScreenOrientation, private shared: SharedDataProvider, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
     // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.splashScreen.hide();

      if(this.platform.is('cordova')){
        this.platform.ready().then(()=>{
         this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        })
      }
    });
  }
  nextS() {
    this.nav.setRoot(SettingPage);
  }
  nextL() {
    this.nav.setRoot(LoginPage);
  }
  
}

