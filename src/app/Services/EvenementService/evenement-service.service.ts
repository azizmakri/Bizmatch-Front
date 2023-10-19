import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  addEvenement(
    nom: string,
    description: string,
    dateDebut: string, // Changez le type de dateDebut en string
    dateFin: string, // Changez le type de dateFin en string
    image: File,
    lieu: string,
    nombreParticipants: number,
    userName: string
  ): Observable<Evenement> {
    const formData: FormData = new FormData();
    formData.append('nom', nom);
    formData.append('description', description);
    formData.append('dateDebut', dateDebut); // Ne pas convertir en format ISO ici
    formData.append('dateFin', dateFin); // Ne pas convertir en format ISO ici
    formData.append('image', image);
    formData.append('lieu', lieu);
    formData.append('nombreParticipants', nombreParticipants.toString());
    formData.append('userName', userName);
  
    return this.http.post<Evenement>(`${this.apiUrl}/createEvent`, formData);
  }
  
  


}