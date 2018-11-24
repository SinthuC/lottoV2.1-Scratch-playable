import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PocketMoneyPage } from './pocket-money';

@NgModule({
  declarations: [
    PocketMoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(PocketMoneyPage),
  ],
})
export class PocketMoneyPageModule {}
