import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarmenuprofileComponent } from './sidebarmenuprofile/sidebarmenuprofile.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './service/user.service';
import { AppRouting } from '../app-routing';
import { ServiceMailService } from '../mails/services/service-mail.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule

  ],
  declarations: [
    SidebarmenuComponent,
    SidebarmenuprofileComponent,
    TopnavComponent,
    HomeComponent,
    LoginComponent
  
  ],
  exports: [
    SidebarmenuComponent,
    SidebarmenuprofileComponent,
    TopnavComponent,
    HomeComponent,
    LoginComponent
  ],
  providers:[
    UserService,
    ServiceMailService
  ]
})
export class SharedModule { }
