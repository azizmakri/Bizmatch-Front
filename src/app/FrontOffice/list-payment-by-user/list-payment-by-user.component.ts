import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaymentService } from 'src/app/Services/User/payment.service';


@Component({
  selector: 'app-list-payment-by-user',
  templateUrl: './list-payment-by-user.component.html',
  styleUrls: ['./list-payment-by-user.component.css']
})
export class ListPaymentByUserComponent {
  userName!: string;  // Modified this line to use the value from local storage
  payments: any[] = []; // Your payments data
  displayedPayments: any[] = []; // The payments to be displayed on the current page
  totalPayment: number = 0;
  length = this.payments.length;
  pageSize = 10;
  pageIndex = 0;


  constructor(private paymentService: PaymentService) {
    this.getUserNameFromLocalStorage();  // Invoke the method to set the userName
  }
  fetchTotalPayment(): void {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    this.paymentService.getTotalPayment(this.userName, currentYear, currentMonth).subscribe(data => {
      this.totalPayment = data;
    });
  }

 // Triggered when page changes
 onPageChange(event: PageEvent): void {
  const startIndex = event.pageIndex * event.pageSize;
  let endIndex = startIndex + event.pageSize;

  if (endIndex > this.length) {
    endIndex = this.length;
  }

  this.displayedPayments = this.payments.slice(startIndex, endIndex);
}
 


  ngOnInit(): void {
    this.fetchPayments();
    this.fetchTotalPayment();

  }

  fetchPayments(): void {
    this.paymentService.getPaymentsByUser(this.userName).subscribe(data => {
      console.log(data);  
      this.payments = data;
    });
  }

  getUserNameFromLocalStorage(): void {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
      const userObj = JSON.parse(userJSON);
      this.userName = userObj.userName;
    }
  }


}