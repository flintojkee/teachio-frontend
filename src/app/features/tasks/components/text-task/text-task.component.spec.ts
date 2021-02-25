import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTaskComponent } from './text-task.component';

describe('TextTaskComponent', () => {
  let component: TextTaskComponent;
  let fixture: ComponentFixture<TextTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
