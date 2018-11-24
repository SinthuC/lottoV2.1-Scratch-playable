import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScratchGamePlayPage } from './scratch-game-play';

@NgModule({
  declarations: [
    ScratchGamePlayPage,
  ],
  imports: [
    IonicPageModule.forChild(ScratchGamePlayPage),
  ],
})
export class ScratchGamePlayPageModule {}
