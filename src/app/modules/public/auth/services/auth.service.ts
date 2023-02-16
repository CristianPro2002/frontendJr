import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { generalEnvironments } from 'src/assets/environments/general-environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly UsersLogin = generalEnvironments.API.UsersApi.UsersLogin;

  constructor(private http: HttpClient) { }

  
  sendCredentials(username:string, password:string):Observable<any> {
    const body = {
      username: username,
      password: password
    }

    return this.http.post(`${this.UsersLogin}`, body)
  }
}
