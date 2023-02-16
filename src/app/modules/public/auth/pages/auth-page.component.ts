import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({})
  errorSesion: boolean = false

  constructor(private AuthService: AuthService ,private cookieService:CookieService, private router:Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  sendLogin(): void {
    const {username, password} = this.formLogin.value
    this.AuthService.sendCredentials(username,password).subscribe({
      next: (data) => {
        this.cookieService.set('token', data.token, 4, '/') 
        this.cookieService.set('rol', data.rol,4,'/' )
        if(this.cookieService.get('token') === 'undefined'){
          this.errorSesion = true
          this.cookieService.delete('token')
          this.cookieService.delete('rol')
        }
        if(data.rol === '2'){
          this.router.navigate(['/', 'major-admin'])
        }else if(data.rol === '1'){
          this.router.navigate(['/', 'major'])
        }
        console.log(data)
      },
      error: (error) => {
        console.log(error)
        this.errorSesion = true;
      }
    })
  }

}
