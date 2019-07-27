import { Component, OnInit } from '@angular/core';
import { AuthService } from './admin/auth.service';
import { Router } from '@angular/router';
import { slideInAnimation } from './app.animtation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  title = 'scm';
  isLoggedIn;

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.auth.user.subscribe(
      user => {
        if(user) {
          this.router.navigate(['/courses']);
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      error => console.log('error', error)
    )
  }


}
