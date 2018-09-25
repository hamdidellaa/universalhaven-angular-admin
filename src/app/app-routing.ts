import { LoginComponent } from './shared/login/login.component';
import {  Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './shared/home/home.component';

const appRoutes: Routes = [
    { path: 'admin', component: HomeComponent }, 
    { path : 'login', component: LoginComponent}
];
@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports:[
      RouterModule
    ]
})
    

export class AppRouting {
}
