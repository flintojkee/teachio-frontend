import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTaskComponent } from './match-task.component';

describe('MatchTaskComponent', () => {
  let component: MatchTaskComponent;
  let fixture: ComponentFixture<MatchTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
