import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reunion } from 'src/app/Models/Reunion';

@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  private apiUrl = 'http://localhost:8083/reunion'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) { }

  ajouterReunion(username: string, reunion: Reunion): Observable<Reunion> {
    const url = `${this.apiUrl}/create/${username}`;
    return this.http.post<Reunion>(url, reunion);
  }
}
