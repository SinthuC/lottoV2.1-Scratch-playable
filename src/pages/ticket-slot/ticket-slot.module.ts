import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketSlotPage } from './ticket-slot';

@NgModule({
  declarations: [
    TicketSlotPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketSlotPage),
  ],
})
export class TicketSlotPageModule {}
