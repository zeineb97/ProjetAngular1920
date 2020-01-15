import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthArtisanNotCompleteGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const auth = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const complete = localStorage.getItem('complete');
    return ( (!!auth) && (role === 'artisan') && (!complete) );
  }

}
