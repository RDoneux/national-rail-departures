import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(
        ':enter',
        [
          style({ opacity: 0 }),
          query(
            ':self',
            animate('{{animationTime}}ms {{delay}}ms', style({ opacity: 1 }))
          ),
        ],
        { params: { animationTime: 800, delay: 300 } }
      ),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(200, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class LoadingSpinnerComponent {
  @Input() size: string = '26px';
  @Input({ required: true }) show!: boolean;
  @Input() fadeInDelay: number = 300;
  @Input() fadeInTime: number = 800;
}
