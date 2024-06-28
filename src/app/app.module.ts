import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    InputNumberModule,
    PasswordModule,
    ButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }