import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPaymentsByUser(userName: string): Observable <any> {
    const url = `http://localhost:8888/payment/payments?userName=${userName}`;
    return this.http.get<any>(url);
  }


  getAllPayments(): Observable<any> {
    const url = `http://localhost:8888/payment/getall`;
    return this.http.get<any>(url);
  }
  getTotalPayment(userName: string, year: number, month: number): Observable<any> {
    const url = `http://localhost:8888/payment/totalpayment?userName=${userName}&year=${year}&month=${month}`;
    return this.http.get<any>(url);
}


getTotalAmountForCurrentMonth(): Observable<any> {
  const url = `http://localhost:8888/payment/total-amount/current-month`;
  return this.http.get<any>(url);
}

}