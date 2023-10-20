import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaymentByUserComponent } from './list-payment-by-user.component';

describe('ListPaymentByUserComponent', () => {
  let component: ListPaymentByUserComponent;
  let fixture: ComponentFixture<ListPaymentByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPaymentByUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPaymentByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
