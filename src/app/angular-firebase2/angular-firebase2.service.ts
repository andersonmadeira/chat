import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AngularFirebase2Service {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  subscribe(loggedIn: Function, notLoggedIn: Function) {
    this.afAuth.authState.subscribe( (auth) => {
      if (auth == null) {
        notLoggedIn();
      } else {
        loggedIn(auth);
      }
    });
  }

}
