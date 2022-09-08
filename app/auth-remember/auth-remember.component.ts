import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'auth-remember',
  templateUrl: "./auth-remember.template.html",
  styleUrls: ["./auth-remember.style.scss"]
})
export class AuthRememberComponent {

  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(){
  }

  onChecked(checked: boolean){
    this.checked.emit(checked);
  }
}
