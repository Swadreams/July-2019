import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  constructor(private appAuth: AngularFireAuth) {
    this.user = this.appAuth.authState;
  }

  login(param) {
    return this.appAuth.auth.signInWithEmailAndPassword(param.email, param.password);
  }

  logout() {
    return this.appAuth.auth.signOut();
  }

  signUp(param) {
    return this.appAuth.auth.createUserWithEmailAndPassword(param.email, param.password);
  }

  isLoggedIn() {
    return this.appAuth.auth.currentUser;
  }

  getToken() {
    return this.appAuth.auth.currentUser.getIdToken();
  }

}
