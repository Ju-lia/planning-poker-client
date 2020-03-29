import { async, TestBed } from '@angular/core/testing';

import { PokerCardModule } from './poker-card.module';

describe('PokerCardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PokerCardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PokerCardModule).toBeDefined();
  });
});
