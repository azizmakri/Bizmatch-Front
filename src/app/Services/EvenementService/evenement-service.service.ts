import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evenement } from 'src/app/Model/Evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementServiceService {
  private baseUrl = 'http://localhost:8083'; 
  private apiUrl = 'http://localhost:8083/gestionEventConf'; // replace with your Spring Boot backend URL

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Ajoutez une méthode pour récupérer tous les événements
  getAllEvents() {
    return this.http.get<Evenement[]>(`${this.apiUrl}/getAllEvents`);
  }




}
