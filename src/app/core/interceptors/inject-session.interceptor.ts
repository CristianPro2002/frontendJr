import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try{
      const token = this.cookieService.get('token')
      if(token.length > 0){
      let newRequest = request
      newRequest = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      })
      return next.handle(newRequest)
    }else {
      this.cookieService.delete('token')
      this.cookieService.delete('rol')
      return next.handle(request)
    }
    }catch(e){
      console.log('error', e)
      return next.handle(request)
    }
  }
}
