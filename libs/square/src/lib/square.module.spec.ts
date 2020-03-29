import { async, TestBed } from '@angular/core/testing';
import { SquareModule } from './square.module';

describe('SquareModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SquareModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SquareModule).toBeDefined();
  });
});
