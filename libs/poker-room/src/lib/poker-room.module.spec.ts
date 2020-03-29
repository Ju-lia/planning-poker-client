import { async, TestBed } from '@angular/core/testing';

import { PokerRoomModule } from './poker-room.module';

describe('PokerRoomModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PokerRoomModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PokerRoomModule).toBeDefined();
  });
});
