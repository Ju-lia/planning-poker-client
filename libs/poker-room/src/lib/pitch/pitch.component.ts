import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Square } from '@planning-poker-client/square';

@Component({
  selector: 'planning-poker-client-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PitchComponent {
  announcementSub;
  colors: string[] = ['red', 'green', 'blue'];
  currentColor = 'red';
  messages: string[] = [];

  @Input()
  name: string;
  @Input()
  set message(message: string) {
    console.log('message', message);
    this.messages.unshift(message);
  }
  @Input()
  squares: Square[] = [];

  @Output() squareClicked = new EventEmitter<{
    squareId: number;
    color: string;
  }>();

  squareClick(square: Square) {
    if (square.Color === this.currentColor) {
      return;
    }

    this.squareClicked.emit({ squareId: square.Id, color: this.currentColor });
  }
}
