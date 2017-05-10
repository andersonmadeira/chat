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

  tryLoginOrRegister(email: string, password: string) {

  }

  registerWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).
      catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        }
        else if (errorCode == 'auth/email-already-in-use') {
          alert('Email already in use!');
        }
        console.log(error);
      });
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
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
