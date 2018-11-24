import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingDetailPage } from './setting-detail';

@NgModule({
  declarations: [
    SettingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingDetailPage),
  ],
})
export class SettingDetailPageModule {}
