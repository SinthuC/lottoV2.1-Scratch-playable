import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScrathGamePage } from './scrath-game';

@NgModule({
  declarations: [
    ScrathGamePage,
  ],
  imports: [
    IonicPageModule.forChild(ScrathGamePage),
  ],
})
export class ScrathGamePageModule {}
