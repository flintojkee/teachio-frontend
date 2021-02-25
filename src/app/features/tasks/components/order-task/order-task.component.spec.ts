import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTaskComponent } from './order-task.component';

describe('OrderTaskComponent', () => {
  let component: OrderTaskComponent;
  let fixture: ComponentFixture<OrderTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
