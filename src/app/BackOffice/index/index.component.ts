import { Component } from '@angular/core';
import { PaymentService } from 'src/app/Services/User/payment.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  totalAmount!: number;
  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.paymentService.getTotalAmountForCurrentMonth().subscribe(data => {
      this.totalAmount = data;
    });
  }
}