import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Square, SquareChangeRequest, WebSocketService } from '@planning-poker-client/square';
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
  squares$: Observable<Square[]>;

  constructor(private socketService: WebSocketService) {
    this.socketService.startSocket();
    this.message$ = this.socketService.announcement$;
    this.squares$ = this.socketService.squares$;
    this.name$ = this.socketService.name$;
  }

  squareClick(event: { color: string; squareId: number }) {
    const req = new SquareChangeRequest();
    req.Id = event.squareId;
    req.Color = event.color;
    this.socketService.sendSquareChangeRequest(req);
  }
}
