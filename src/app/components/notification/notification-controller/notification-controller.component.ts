import { Component, OnInit } from '@angular/core';
import { INotification } from 'src/app/interfaces/i-notification';
import { ISystemMessage } from 'src/app/services/message/i-system-message';
import { MessageService } from 'src/app/services/message/message.service';
import {
  animate,
  group,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-notification-controller',
  templateUrl: './notification-controller.component.html',
  styleUrls: ['./notification-controller.component.scss'],
  animations: [
    trigger('enterLeaveAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(110%)', height: 0 }),
        group([
          animate('100ms ease', style({ height: '*' })),
          animate(
            '250ms 100ms ease',
            style({ opacity: 1, transform: 'translateX(0)' })
          ),
        ]),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        group([
          animate(
            '250ms',
            style({ opacity: 0, transform: 'translateX(110%)' })
          ),
          animate('100ms 250ms ease', style({ height: 0 })),
        ]),
      ]),
    ]),
  ],
})
export class NotificationControllerComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  notifications: INotification[] = [];

  ngOnInit(): void {
    this.messageService.getStreams$(['notification']).subscribe({
      next: (response: ISystemMessage) => {
        response.payload.id = crypto.randomUUID();
        this.notifications.unshift(response.payload);
      },
    });
  }

  onMessageClosed(notification: INotification): void {
    this.notifications = this.notifications.filter(
      (notificationFromArray) => notificationFromArray.id != notification.id
    );
  }
}
