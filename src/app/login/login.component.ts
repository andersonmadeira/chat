import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirebase2Service } from './../angular-firebase2/angular-firebase2.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public alert: any = null;

  constructor(public afb: AngularFirebase2Service, private router: Router) { }

  loginWithGoogle() {
    this.afb.loginWithGoogle().then((data) => {
      this.router.navigate(['']); // send user to home
    });
  }

  loginWithFacebook() {
    this.afb.loginWithFacebook().then((data) => {
      this.router.navigate(['']); // send user to home
    });
  }

  tryLoginOrRegister(email: string, password: string) {
    this.afb.afAuth.auth.signInWithEmailAndPassword(email, password)
    .catch( (error: firebase.FirebaseError) => {
      // Handle Errors here.
      if (error.code === 'auth/invalid-email') {
        this.setAlert('O email informado é inválido!');
      } else if (error.code == 'auth/user-disabled') {
        this.setAlert('Conta foi removida!');
      } else if (error.code == 'auth/wrong-password') {
        this.setAlert('Senha inválida!');
      } else if (error.code == 'auth/user-not-found') {
        this.setAlert('Usuário inexistente! Criando novo!');
        this.afb.afAuth.auth.createUserWithEmailAndPassword(email, password).
          catch( (error: firebase.FirebaseError) => {
            // Handle Errors here.
            if (error.code == 'auth/weak-password') {
              this.setAlert('A senha é muito fraca!');
            }
            console.log(error);
          });
      }
      console.log(error);
    });


  }

  setAlert(pMessage: string, pType: string = 'danger') {
    this.alert = {type: pType, message: pMessage};
  }

  onAlertClosed() {
    this.alert = null;
  }

  logout() {
    this.afb.logout();
  }

  ngOnInit() {
  }

}
