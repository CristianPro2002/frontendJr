import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor (private cookieService: CookieService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkTokenSession();
  }
  
  checkTokenSession(): boolean {
    try{
      const token:boolean = this.cookieService.check('token')
      const rol: string = this.cookieService.get('rol')
      if(token && (rol === '1' || rol === 'User')){
        return token
      }else{
        this.router.navigate(['/auth/login'])
        return false
      }
    }
    catch(e){
      console.log('algo sucedio', e)
      return false
    }
  }

}
