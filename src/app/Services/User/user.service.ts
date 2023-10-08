import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8083'; 
  private apiUrl = 'http://localhost:8083/user/users'; // replace with your Spring Boot backend URL


  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/registerNewUser`, user);
  }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}

export interface User {
  userName: string;
  userFirstName: string;
  userLastName: string;
  // ... other fields ...
}