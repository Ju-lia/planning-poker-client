import { Injectable } from '@angular/core';
import { PokerCard, PokerCardChangeRequest, SocketMessage } from '@planning-poker-client/poker-card';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: WebSocket;
  pokerCards$: BehaviorSubject<PokerCard[]> = new BehaviorSubject<PokerCard[]>(
    []
  );
  announcement$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  name$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private name: string;

  startSocket() {
    this.socket = new WebSocket('wss://localhost:5001/ws');
    this.socket.addEventListener('open', ev => {
      console.log('WebSocket opened');
    });
    this.socket.addEventListener('message', ev => {
      const messageBox: SocketMessage = JSON.parse(ev.data);
      switch (messageBox.MessageType) {
        case 'name':
          this.name = messageBox.Payload;
          this.name$.next(this.name);
          break;
        case 'announce':
          this.announcement$.next(messageBox.Payload);
          break;
        case 'pokerCards':
          this.pokerCards$.next(messageBox.Payload);
          break;
        default:
          break;
      }
    });
  }

  sendPokerCardChangeRequest(req: PokerCardChangeRequest) {
    req.name = this.name;

    const requestAsJson = JSON.stringify(req);
    this.socket.send(requestAsJson);
  }
}
