import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from 'src/app/Models/Evenement';

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
    formData.append('dateDebut', dateDebut); 
    formData.append('dateFin', dateFin); 
    formData.append('image', image);
    formData.append('lieu', lieu);
    formData.append('nombreParticipants', nombreParticipants.toString());
    formData.append('userName', userName);
  
    return this.http.post<Evenement>(`${this.apiUrl}/createEvent`, formData);
  }
  
  updateEvenement(eventId: number, formData: any, userName: string): Observable<Evenement> {
    const url = `${this.apiUrl}/updateEvent/${eventId}/${userName}`;
    return this.http.put<Evenement>(url, formData, this.httpOptions);
  }
  getEvenementById(eventId: number): Observable<Evenement> {
    const url = `${this.apiUrl}/getEvent/${eventId}`;
    return this.http.get<Evenement>(url);
  }
  participateInEvent(eventId: number, userName: string): Observable<string> {
    // Appelez l'API backend pour participer à l'événement en utilisant eventId et userName
    return this.http.post<string>(`${this.apiUrl}/participate/${eventId}/${userName}`, {});
  }
  
  addFavori(username: string, idEvent: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/favoris/${username}/${idEvent}`, null);
  }
  deleteProduct(idEvent: number, username: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteEvent/${idEvent}/${username}`);
  }
  getProductsFavoris(username: string):Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/favoris/${username}`)
  }

}