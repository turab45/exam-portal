import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  generateToken(loginData: any) {
    return this.http.post(`${this.baseUrl}/authenticate`, loginData);
  }

  //login user: set token in localstorage
  public loginUser(token: any) {
    localStorage.setItem("token", token);
  }

  // is logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem("token");
    if (tokenStr == undefined || tokenStr == null || tokenStr == '') {
      return false;
    } else {
      return true;
    }

  }

  // logout: remove token from localstorage
  public logout() {
    localStorage.removeItem("token");
    return true;
  }

  // return token
  public getToken() {
    return localStorage.getItem("token");
  }

  // set user
  public setUSer(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  // get user
  public getUser() {
    let userStr = localStorage.getItem("user");
    if (userStr != null)
      return JSON.stringify(userStr);
    else
      return null;

  }

  // get user role
  public getUserRole() {
    let user = this.getUser();

    //return user.authorities[0].authority;
  }

}
