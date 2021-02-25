import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillTheBlankTaskComponent } from './fill-the-blank-task.component';

describe('FillTheBlankTaskComponent', () => {
  let component: FillTheBlankTaskComponent;
  let fixture: ComponentFixture<FillTheBlankTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillTheBlankTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillTheBlankTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
