import { Component } from '@angular/core';
import { PaymentService } from 'src/app/Services/User/payment.service';

@Component({
  selector: 'app-list-payment-by-user',
  templateUrl: './list-payment-by-user.component.html',
  styleUrls: ['./list-payment-by-user.component.css']
})
export class ListPaymentByUserComponent {
  userName = 'amir1999';
  payments!: any[];

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.fetchPayments();
  }

  fetchPayments(): void {
    this.paymentService.getPaymentsByUser(this.userName).subscribe(data => {
      console.log(data);  
      this.payments = data;
    });
  }


}
