import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }
  error;
  ngOnInit() {
  }

  login(form) {
    this.auth.login(form.value)
        .then(
          response => {
            this.router.navigate(['/courses']);
            console.log('login response', response);
            console.log('current user token', this.auth.getToken());
          },
          error => {
            console.log('login error', error)
            this.error = error.message;
          }
        )
  }

}
