import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementList } from './increment-list';

describe('IncrementList', () => {
  let component: IncrementList;
  let fixture: ComponentFixture<IncrementList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementList],
    }).compileComponents();

    fixture = TestBed.createComponent(IncrementList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
