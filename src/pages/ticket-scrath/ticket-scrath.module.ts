import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketScrathPage } from './ticket-scrath';

@NgModule({
  declarations: [
    TicketScrathPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketScrathPage),
  ],
})
export class TicketScrathPageModule {}
