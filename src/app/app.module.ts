import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AlarmPage } from '../pages/alarm/alarm';
import { PocketMoneyPage } from '../pages/pocket-money/pocket-money';

import { TicketScrathPage } from '../pages/ticket-scrath/ticket-scrath';
import { TicketSlotPage } from '../pages/ticket-slot/ticket-slot';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingDetailPage } from '../pages/setting-detail/setting-detail';
import { SettingPage } from '../pages/setting/setting';
import { ScrathGamePage } from '../pages/scrath-game/scrath-game';
import { ScratchGamePlayPage } from '../pages/scratch-game-play/scratch-game-play';
import { TicketPage } from '../pages/ticket/ticket';
import { FruityGamePage } from '../pages/fruity-game/fruity-game';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { SharedDataProvider } from '../providers/shared-data/shared-data';
import { EditPage } from '../pages/edit/edit';
import { RegisterPage } from '../pages/register/register';
import { WebPage } from '../pages/web/web';
import { BuycoinPage } from '../pages/buycoin/buycoin';
import { OutmoneyPage } from '../pages/outmoney/outmoney';
import { ShowresultPage } from '../pages/showresult/showresult';
import { HowtoSlotPage } from '../pages/howto-slot/howto-slot';
import { HowtoScratchPage } from '../pages/howto-scratch/howto-scratch';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AlarmPage,
    PocketMoneyPage,
    SettingPage,
    SettingDetailPage,
    TicketScrathPage,
    TicketSlotPage,
    TabsPage,
    ScrathGamePage,
    ScratchGamePlayPage,
    TicketPage,
    FruityGamePage,
    EditPage,
    RegisterPage,
    WebPage,
    BuycoinPage,
    OutmoneyPage,
    ShowresultPage,
    HowtoScratchPage,
    HowtoSlotPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true,
    }
    )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AlarmPage,
    PocketMoneyPage,
    SettingPage,
    SettingDetailPage,
    TicketScrathPage,
    TicketSlotPage,
    TabsPage,
    ScrathGamePage,
    ScratchGamePlayPage,
    TicketPage,
    FruityGamePage,
    EditPage,
    RegisterPage,
    WebPage,
    BuycoinPage,
    OutmoneyPage,
    ShowresultPage,
    HowtoSlotPage,
    HowtoScratchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SharedDataProvider
  ]
})
export class AppModule {}
