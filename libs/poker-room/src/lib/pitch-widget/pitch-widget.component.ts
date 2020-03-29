import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PokerCard, PokerCardChangeRequest, WebSocketService } from '@planning-poker-client/poker-card';
import { Observable } from 'rxjs';

@Component({
  selector: 'planning-poker-client-pitch-widget',
  templateUrl: './pitch-widget.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PitchWidgetComponent {
  name$: Observable<string>;
  message$: Observable<string>;
  pokerCards$: Observable<PokerCard[]>;

  constructor(private socketService: WebSocketService) {
    this.socketService.startSocket();
    this.message$ = this.socketService.announcement$;
    this.pokerCards$ = this.socketService.pokerCards$;
    this.name$ = this.socketService.name$;
  }

  pokerCardClick(event: { color: string; pokerCardId: number }) {
    this.socketService.sendPokerCardChangeRequest({
      Color: event.color,
      Id: event.pokerCardId
    } as PokerCardChangeRequest);
  }
}
