import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceTaskComponent } from './multiple-choice-task.component';

describe('MultipleChoiceTaskComponent', () => {
  let component: MultipleChoiceTaskComponent;
  let fixture: ComponentFixture<MultipleChoiceTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleChoiceTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
