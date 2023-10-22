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
    return this.http.get<User[]>(`${this.baseUrl}/partenairesPotentiels/retrieveallusers`);
  }

  updateUser(username: string, userDetails: User): Observable<User> {
    const url = `${this.baseUrl}/auth/updateUser/${username}`;
    return this.http.put<User>(url, userDetails, this.httpOptions);
  }

 

  getPartners(userName: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/partenairesPotentiels/partners/${userName}`);
  }

  getPartnerRequests(userName: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/partenairesPotentiels/partnerRequests/${userName}`);
  }

  getUserByUsername(userName: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/partenairesPotentiels/retrieveuserbyid/${userName}`);
  }

// Remove a partner request
removePartnerRequest(userName: string, partnerRequestToRemoveUserName: string): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/partenairesPotentiels/removePartnerRequest/${userName}/${partnerRequestToRemoveUserName}`);
}


// Remove a partner 
removePartner(userName: string, partnerToRemoveUserName: string): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/partenairesPotentiels/removePartner/${userName}/${partnerToRemoveUserName}`);
}


// Accept a partnership
acceptPartnership(userName: string, partnerRequestToAcceptUserName: string): Observable<void> {
  return this.http.post<void>(`${this.baseUrl}/partenairesPotentiels/acceptPartnership/${userName}/${partnerRequestToAcceptUserName}`, {});
}

addPartnershipRequest(userName: string, desiredPartnerUserName: string): Observable<void> {
  return this.http.post<void>(`${this.baseUrl}/partenairesPotentiels/addPartnershipRequest/${userName}/${desiredPartnerUserName}`, {});
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
  image: string;
  location: string;
  Domaines: string;
  userEmail:string;
  roleDemander: string;
}