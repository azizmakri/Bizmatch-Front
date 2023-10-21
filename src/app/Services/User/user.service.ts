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


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/auth/${username}`);
  }

  updateUser(username: string, userDetails: User): Observable<User> {
    const url = `${this.baseUrl}/auth/updateUser/${username}`;
    return this.http.put<User>(url, userDetails, this.httpOptions);
  }

  updateUserImage(username: string, userDetails: User, imageFile?: File): Observable<User> {
    const formData: FormData = new FormData();

    formData.append('userName', username);
    formData.append('userFirstName', userDetails.userFirstName);
    formData.append('userLastName', userDetails.userLastName);
    if (imageFile) {
        formData.append('image', imageFile, imageFile.name);
    }
    formData.append('siteWeb', userDetails.siteWeb);
    formData.append('facebook', userDetails.facebook);
    formData.append('linkedIn', userDetails.linkedIn);
    formData.append('aboutMe', userDetails.aboutMe);
    formData.append('location', userDetails.location);

    const url = `http://localhost:8083/auth/user/updateAvecImage/${username}`;
    return this.http.put<User>(url, formData); // You don't need httpOptions as we're sending FormData now.
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
  image:string;
  Domaines: string;
  userEmail:string;
  roleDemander: string;
}