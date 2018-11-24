import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FruityGamePage } from './fruity-game';

@NgModule({
  declarations: [
    FruityGamePage,
  ],
  imports: [
    IonicPageModule.forChild(FruityGamePage),
  ],
})
export class FruityGamePageModule {}
