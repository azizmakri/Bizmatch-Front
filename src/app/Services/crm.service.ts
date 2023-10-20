import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmService {
  private baseUrl = 'http://localhost:8083/formulaires';

  constructor(private http: HttpClient) { }

  createFormulaire(formulaire: any, userName: string): Observable<any> {
    const url = `${this.baseUrl}/create/${userName}`;
    return this.http.post<any>(url, formulaire);
  }


  getAllFormulaires(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getallclaim`);
  }
}
