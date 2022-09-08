import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AuthFormComponent } from './auth-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [
  ],
  declarations: [
    AuthFormComponent
  ],
  exports: [
    AuthFormComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthFormModule {}
