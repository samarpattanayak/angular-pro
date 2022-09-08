import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: "./app.template.html"
})
export class AppComponent {

  public rememberMe: boolean = false;

  createUser(userDetail){
    console.log("Craete user called", userDetail)
  }

  loginUser(loginDetail){
    console.log("login user called", loginDetail, this.rememberMe)
  }

  rememberUser(checked: boolean){
    this.rememberMe = checked;
  }
}
