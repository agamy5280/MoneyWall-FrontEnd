import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errorMsg: string = '';
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]+')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]+')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^[a-zA-Z][a-zA-Z0-9]*$')]),
    nationalID: new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength(14), Validators.pattern('[0-9]+')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  register() {
    console.log(this.registerForm.value)
  }
}
