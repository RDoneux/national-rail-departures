import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationControllerComponent } from './notification-controller/notification-controller.component';
import { NotificationMessageComponent } from './notification-message/notification-message.component';

@NgModule({
  declarations: [NotificationControllerComponent, NotificationMessageComponent],
  imports: [CommonModule],
  exports: [NotificationControllerComponent],
})
export class NotificationModule {}
