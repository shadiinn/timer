import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  name="admin";
  pass="123";
  router=inject(Router);
  service=inject(LoginService)

  loginform=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })
  login(){
    if(this.loginform.value.username==this.name && this.loginform.value.password==this.pass){
      this.service.loggedin=true;
      this.router.navigate(['./home'])
    }
  }
}
