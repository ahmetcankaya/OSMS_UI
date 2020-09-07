import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router, private service:LoginServiceService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem('token')!=null){
        let roles = next.data['permittedRoles'] as Array<string>
        if(roles){
          if(this.service.roleMatch(roles)) return true;
          else{
            this.router.navigate(["/forbidden"])
            return false
          }
        }
        return true;
      }
      else{
        this.router.navigateByUrl('/')
        return false;
      }
  }
  
}