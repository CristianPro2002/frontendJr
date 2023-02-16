import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register-pages',
  templateUrl: './register-pages.component.html',
  styleUrls: ['./register-pages.component.css']
})
export class RegisterPagesComponent implements OnInit {

  formRegister: FormGroup = new FormGroup({})
  errorRegister:boolean =  false
  linksRegister:any = {}

  constructor(private registerService: RegisterService, private cookieService: CookieService, private router:Router) { }

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      username: new FormControl('', [Validators.required]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.required]),
      password2: new FormControl('', [Validators.required]),
      phone_number: new FormControl('', [Validators.required]),
    })

    this.linksRegister = {
      name: 'Iniciar Sesión',
      router: ['auth/login']
    }
  }

  sendRegister(): void {
    const {username, first_name, last_name, email, password, password2, phone_number} = this.formRegister.value
    console.log(phone_number)
    this.registerService.sendRegisterCredentials(username, first_name, last_name, email, password, password2, phone_number).subscribe({
      next: (data) => {
        this.cookieService.set('token', data.token, 4, '/')
        this.cookieService.set('rol', data.rol,4,'/' )
        if(this.cookieService.get('token') === 'undefined'){
          this.errorRegister = true
          this.cookieService.delete('token')
          this.cookieService.delete('rol')
        }
        if(data.rol === '2' || data.rol === 'Admin'){
          this.router.navigate(['/', 'major-admin'])
        }else if(data.rol === '1' || data.rol === 'User'){
          this.router.navigate(['/', 'major'])
        }
        console.log(data)
      },
      error: (error) => {
        console.log(error)
        this.errorRegister = true;
      }

    })

  

  }

}
