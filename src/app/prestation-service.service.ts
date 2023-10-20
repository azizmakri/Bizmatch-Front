import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceFournisseur } from './Models/ServiceFournisseur';
import { Room } from './Models/Room';
import { CommentRoom } from './Models/CommentRoom';

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


  addRoom(r: Room, idEntreprise: string,idFournisseur: string,idService: number): Observable<ServiceFournisseur> {
    const url = `${this.baseUrl}/add-room/${idEntreprise}/${idFournisseur}/${idService}`;
    return this.http.post<ServiceFournisseur>(url, r);
  }

  getRoomsByUser(username: string): Observable<Room[]> {
    const url = `${this.baseUrl}/getRoomsByUser/${username}`;
    return this.http.get<Room[]>(url);
  }

  getRoomById(roomId: number): Observable<Room> {
    const url =  `${this.baseUrl}/getRoomById/${roomId}`;
    return this.http.get<Room>(url);
  }

  addComment(c: CommentRoom, idUser: string, idRoom: number): Observable<CommentRoom> {
    const url = `${this.baseUrl}/add-comment/${idUser}/${idRoom}`;
    return this.http.post<CommentRoom>(url, c);
  }
}



