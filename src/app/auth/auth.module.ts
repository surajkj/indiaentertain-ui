import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { NoAuthGuard } from './no-auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
 
@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    NoAuthGuard
  ],
  bootstrap: [AuthComponent]
})
 
export class AuthModule { }