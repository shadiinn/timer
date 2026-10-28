import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'login',
        loadComponent:()=>import('./login/login.component').then((m)=>m.LoginComponent)
    },
    {
        path:'home',
        canActivate:[authGuard],
        loadComponent:()=>import('./home/home.component').then((m)=>m.HomeComponent)
    },
    {
        path:'**',
        loadComponent:()=>import('./notfound/notfound.component').then(m=>m.NotfoundComponent)
    }
];
