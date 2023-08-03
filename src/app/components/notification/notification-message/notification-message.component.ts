import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INotification } from 'src/app/interfaces/i-notification';

@Component({
  selector: 'app-notification-message',
  templateUrl: './notification-message.component.html',
  styleUrls: ['./notification-message.component.scss'],
})
export class NotificationMessageComponent {
  @Input({ required: true }) notification!: INotification;

  @Output() closed: EventEmitter<INotification> = new EventEmitter();

  onClose(): void {
    this.closed.emit(this.notification);
  }
}
