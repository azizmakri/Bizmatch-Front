import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {
  private apiUrl = 'http://127.0.0.1:8000/api/talk';

  constructor(private http: HttpClient) { }

  sendMessage(userInput: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.apiUrl, { user_input: userInput }, { headers });
  }
  
}