import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentService } from 'src/app/Services/User/payment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  // We load  Stripe
  stripePromise = loadStripe(environment.stripe);
  userName = 'adminBizmatch';

  idServiceFournisseur: number = 1;  // Assuming a static value for demonstration. In real-world scenarios, this value would likely be dynamic.

  constructor(private http: HttpClient) {}

  





  async pay(): Promise<void> {
    const payment = {
      name: 'ServiceMarketing',
      currency: 'usd',
      amount: 5000,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    };

    const stripe = await this.stripePromise;
    if (!stripe) {
      console.error('Stripe failed to initialize');
      return;
    }
  
    // Update the POST request to include the userName and idServiceFournisseur as parameters
    this.http.post(`${environment.apiUrl}/payment?userName=${this.userName}&idServiceFournisseur=${this.idServiceFournisseur}`, payment)
      .subscribe((data: any) => {
        stripe.redirectToCheckout({
          sessionId: data.id,
        }).then((result) => {
          if (result.error) {
            console.error(result.error.message);
          }
        });
      });
  }
}