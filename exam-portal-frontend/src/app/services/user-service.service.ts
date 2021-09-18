import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl = "http://localhost:8080"
  constructor(private http: HttpClient) { }


  addUser(user: any) {
    return this.http.post(`${this.baseUrl}/user/create`, user);
  }
}
