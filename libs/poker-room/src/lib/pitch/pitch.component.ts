import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {PokerCard} from '@planning-poker-client/poker-card';
import {isEmpty, isUndefined} from 'lodash-es';

@Component({
  selector: 'planning-poker-client-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PitchComponent {
  announcementSub;
  selectedPokerCard: PokerCard;
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
    if (isEmpty(message)) {
      return;
    }
    this.messages.unshift(message);
    if (this.messages.length > 3) {
      this.messages.pop();
    }
  }
  @Input()
  pokerCards: PokerCard[] = [];

  @Output() pokerCardClicked = new EventEmitter<PokerCard>();

  pokerCardClick(pokerCard: PokerCard) {
    if (
      !isUndefined(this.selectedPokerCard) &&
      pokerCard.Value === this.selectedPokerCard.Value
    ) {
      return;
    }
    this.selectedPokerCard = pokerCard;
    this.pokerCardClicked.emit({ ...pokerCard, Name: this.name });
  }
}
