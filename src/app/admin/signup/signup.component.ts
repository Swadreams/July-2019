import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SpaceValidator } from './space.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  get formControl() {
    return this.form.controls;
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', [
                   Validators.required,
                   Validators.minLength(4),
                   SpaceValidator.canNotContainSpace
                ]
      ],
      password: ''
    })
  }

  signUp() {
    console.log(this.form);
    this.auth.signUp(this.form.value)
        .then(
          response => {
            alert('Acccount created successfully..');
            this.router.navigate(['/login']);
          },
          error => console.log('error', error)
        )
  }
}
