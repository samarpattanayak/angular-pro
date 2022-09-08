import { AfterContentInit, Component, EventEmitter, OnInit, Output, ContentChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthRememberComponent } from "../auth-remember/auth-remember.component"

@Component({
  selector: 'auth-form',
  templateUrl: "./auth-form.template.html",
  styleUrls: ["./auth-form.style.scss"]
})
export class AuthFormComponent implements OnInit, AfterContentInit{

  public authForm: FormGroup;

  @Output() submitted: EventEmitter<Object> = new EventEmitter<{}>();

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;
  
  public ngOnInit(){
    this.authForm = new FormBuilder().group({
      email: new FormControl(""),
      passowrd: new FormControl("")
    })
  }

  public ngAfterContentInit(){
    console.log(this.remember)
  }

  onSubmit(formValue){
    this.submitted.emit(formValue);
  }
}
