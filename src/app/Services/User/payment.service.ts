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
}
