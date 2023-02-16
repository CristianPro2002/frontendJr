import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { generalEnvironments } from 'src/assets/environments/general-environments';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly UsersRegister = generalEnvironments.API.UsersApi.UsersRegister;

  constructor(private http: HttpClient) { }

  sendRegisterCredentials(username:string, first_name:string, last_name:string, email:string, password:string, password2:string, phone_number:string ):Observable<any> {
    const body = {
      username: username,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      password2: password2,
      phone_number: phone_number,
    }

    return this.http.post(`${this.UsersRegister}`, body)
  }
}
