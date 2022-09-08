import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthFormModule } from "./auth-form/auth-form.module";
import { AuthRememberModule } from "./auth-remember/auth-remember.module";

@NgModule({
  imports: [
    BrowserModule,
    AuthFormModule,
    AuthRememberModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
