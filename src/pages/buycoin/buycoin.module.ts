import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuycoinPage } from './buycoin';

@NgModule({
  declarations: [
    BuycoinPage,
  ],
  imports: [
    IonicPageModule.forChild(BuycoinPage),
  ],
})
export class BuycoinPageModule {}
