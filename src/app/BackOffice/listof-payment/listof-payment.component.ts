import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/Services/User/payment.service';

@Component({
  selector: 'app-listof-payment',
  templateUrl: './listof-payment.component.html',
  styleUrls: ['./listof-payment.component.css']
})
export class ListofPaymentComponent implements OnInit {

  payments: any[] = [];

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.paymentService.getAllPayments().subscribe(data => {
      this.payments = data;
    });
  }
}