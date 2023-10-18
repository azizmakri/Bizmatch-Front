import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8083'; 
  private apiUrl = 'http://localhost:8083/user/users'; // replace with your Spring Boot backend URL


  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/registerNewUser`, user);
  }

  getUserDetails(userName: string) {
      // Retrieve the JWT token from local storage
      const jwtToken = localStorage.getItem('jwtToken');
  
      // Set headers with the JWT token for authentication
      
    return this.http.get(`${this.baseUrl}/user/getUserDetails/${userName}`);
  }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  updateUser(username: string, userDetails: User): Observable<User> {
    const url = `${this.baseUrl}/auth/updateUser/${username}`;
    return this.http.put<User>(url, userDetails, this.httpOptions);
  }

}

export interface User {
  userName: string;
  userFirstName: string;
  userLastName: string;
  userPassword: string;
  facebook: string;
  linkedIn: string;
  siteWeb: string;
  aboutMe: string;
  location: string;
  Domaines: string;
  userEmail:string;
  roleDemander: string;
}