import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { generalEnvironments } from 'src/assets/environments/general-environments';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {

  private readonly Users = generalEnvironments.API.UsersApi.Users;

  constructor(private http:HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.Users}`)
  }

  getUsersid(id:any): Observable<any> {
    return this.http.get(`${this.Users}${id}`)
  }

  putUser(id:any, data:any): Observable<any> {
    return this.http.put(`${this.Users}${id}`, data)
  }

  deleteUser(id:any): Observable<any> {
    return this.http.delete(`${this.Users}${id}`)
  }

}
