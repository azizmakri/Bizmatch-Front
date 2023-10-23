import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Tendances } from 'src/app/Models/Tendances';

@Injectable({
  providedIn: 'root'
})
export class DecouverteTendanceService {

  TENDANCES: any[] = [];
  private _refresh$=new Subject<void>()

  url =  'http://localhost:8083/Marche';
  
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getTendances(): Observable<Tendances[]> {
    const url = `${this.url}/tendance/getAll`;
    return this.http.get<Tendances[]>(url);
  }
 

  getTendanceById(idTendance: number): Observable<Tendances> {
    const url =  `${this.url}/tendance/getById/${idTendance}`;
    return this.http.get<Tendances>(url);
  }


  addTendance(t: Tendances): Observable<Tendances> {
    const url = `${this.url}/tendance/add`;
    return this.http.post<Tendances>(url, t);
  }

}