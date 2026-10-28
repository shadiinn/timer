import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service=inject(LoginService);
  const router=inject(Router)
  if(service.loggedin==true){
    return true;
  }
  else{
    return router.createUrlTree(['./login'])
  }
  
};
