import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.scss']
})
export class ValidatorsComponent implements OnInit {


  constructor(private _formBuilder: FormBuilder) {
  }


  submitted: boolean = false;
  loginForm!: FormGroup;

  /**
   * login if submit
   */
  login() {
    this.submitted = true;
  }

  ngOnInit(): void {
       this.loginForm = this._formBuilder.group(
        {
          password: ['', Validators.required],
          confirmPassword: ['', Validators.required],
        }
      );

  }

  /**
   * get password
   * getters
   */
  get password() {
    return this.loginForm.get('password');
  }
  get confirmPassword() {
    return this.loginForm.get('confirmPassword');
  }


}

