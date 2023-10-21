import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofPaymentComponent } from './listof-payment.component';

describe('ListofPaymentComponent', () => {
  let component: ListofPaymentComponent;
  let fixture: ComponentFixture<ListofPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
