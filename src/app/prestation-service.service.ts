import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceFournisseur } from './Models/ServiceFournisseur';

@Injectable({
  providedIn: 'root'
})
export class PrestationServiceService {
  private baseUrl = 'http://localhost:8083/prestationservice';
  
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getServices(): Observable<ServiceFournisseur[]> {
    const url = `${this.baseUrl}/getall`;
    return this.http.get<ServiceFournisseur[]>(url);
  }


  getServiceById(idService: number): Observable<ServiceFournisseur> {
    const url =  `${this.baseUrl}/getById/${idService}`;
    return this.http.get<ServiceFournisseur>(url);
  }

  addService(s: ServiceFournisseur, username: string): Observable<ServiceFournisseur> {
    const url = `${this.baseUrl}/add/${username}`;
    return this.http.post<ServiceFournisseur>(url, s);
  }
}



