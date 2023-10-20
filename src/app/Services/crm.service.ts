import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmService {
  private baseUrl = 'http://localhost:9014/formulaires/create';


  constructor(private http: HttpClient) { }

  createFormulaire(formulaire: any): Observable<any> {
    return this.http.post(this.baseUrl, formulaire);
  }
}
