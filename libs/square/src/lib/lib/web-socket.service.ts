import { Injectable } from '@angular/core';
import { SocketMessage, Square, SquareChangeRequest } from '@planning-poker-client/square';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: WebSocket;
  squares$: BehaviorSubject<Square[]> = new BehaviorSubject<Square[]>([]);
  announcement$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  name$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private name: string;

  startSocket() {
    this.socket = new WebSocket('wss://localhost:5001/ws');
    this.socket.addEventListener('open', ev => {
      console.log('opened');
    });
    this.socket.addEventListener('message', ev => {
      const messageBox: SocketMessage = JSON.parse(ev.data);
      console.log('message object', messageBox);
      switch (messageBox.MessageType) {
        case 'name':
          this.name = messageBox.Payload;
          this.name$.next(this.name);
          break;
        case 'announce':
          this.announcement$.next(messageBox.Payload);
          break;
        case 'squares':
          this.squares$.next(messageBox.Payload);
          break;
        default:
          break;
      }
    });
  }

  sendSquareChangeRequest(req: SquareChangeRequest) {
    req.name = this.name;
    const requestAsJson = JSON.stringify(req);
    this.socket.send(requestAsJson);
  }
}
