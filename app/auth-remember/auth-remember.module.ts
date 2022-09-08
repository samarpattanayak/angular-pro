import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { AuthRememberComponent } from './auth-remember.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  bootstrap: [
  ],
  declarations: [
    AuthRememberComponent
  ],
  exports: [
    AuthRememberComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthRememberModule {}
