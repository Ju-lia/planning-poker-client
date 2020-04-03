import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {PokerCard} from '@planning-poker-client/poker-card';

@Component({
  selector: 'planning-poker-client-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PitchComponent {
  announcementSub;
  value: number;
  messages: string[] = [];
  userPokerCards: PokerCard[] = [
    { Value: 1, Disabled: false },
    { Value: 2, Disabled: false },
    { Value: 3, Disabled: false },
    { Value: 5, Disabled: false },
    { Value: 8, Disabled: false }
  ];
  @Input()
  name: string;
  @Input()
  set message(message: string) {
    this.messages.unshift(message);
  }
  @Input()
  pokerCards: PokerCard[] = [];

  @Output() pokerCardClicked = new EventEmitter<PokerCard>();

  pokerCardClick(pokerCard: PokerCard) {
    if (pokerCard.Value === this.value) {
      return;
    }
    console.log({ ...pokerCard, Name: this.name });

    this.pokerCardClicked.emit({ ...pokerCard, Name: this.name });
  }
}
