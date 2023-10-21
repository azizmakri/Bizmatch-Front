import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Besoin } from 'src/app/Models/Besoin';
import { Marche } from 'src/app/Models/Marche';

@Injectable({
  providedIn: 'root'
})
export class CompagneMarketingService {
  private baseUrl = 'http://localhost:8083/besoinMarche';
  
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getMarches(): Observable<Marche[]> {
    const url = `${this.baseUrl}/marche/getAll`;
    return this.http.get<Marche[]>(url);
  }

  getMarcheById(idMarche: number): Observable<Marche> {
    const url =  `${this.baseUrl}/marche/getById/${idMarche}`;
    return this.http.get<Marche>(url);
  }


  getBesoins(): Observable<Besoin[]> {
    const url = `${this.baseUrl}/besoin/getAll`;
    return this.http.get<Besoin[]>(url);
  }

  addBesoin(s: Besoin): Observable<Besoin> {
    const url = `${this.baseUrl}/besoin/add`;
    return this.http.post<Besoin>(url, s);
  }

  findBestMatch(idBesoin : number): Observable<Marche[]> {
    const url = `${this.baseUrl}/marche/best-match/${idBesoin}`;
    return this.http.get<Marche[]>(url);
  }
}
