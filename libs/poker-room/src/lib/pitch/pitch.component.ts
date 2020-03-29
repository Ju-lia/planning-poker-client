import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PokerCard } from '@planning-poker-client/poker-card';

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
  pokerCards: PokerCard[] = [];

  @Output() pokerCardClicked = new EventEmitter<{
    pokerCardId: number;
    color: string;
  }>();

  pokerCardClick(pokerCard: PokerCard) {
    if (pokerCard.Color === this.currentColor) {
      return;
    }
    console.log('pokerCard', pokerCard);
    console.log('pokerCard', pokerCard.Id);

    this.pokerCardClicked.emit({
      pokerCardId: pokerCard.Id,
      color: this.currentColor
    });
  }
}
