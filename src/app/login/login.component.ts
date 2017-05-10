import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirebase2Service } from './../angular-firebase2/angular-firebase2.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        alert('O email informado é inválido!');
      } else if (errorCode == 'auth/user-disabled') {
        alert('Conta foi removida!');
      } else if (errorCode == 'auth/wrong-password') {
        alert('Senha inválida!');
      } else if (errorCode == 'auth/user-not-found') {
        this.afb.afAuth.auth.createUserWithEmailAndPassword(email, password).
          catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
              alert('The password is too weak.');
            }
            console.log(error);
          });
        }
      console.log(error);
    });


  }

  logout() {
    this.afb.logout();
  }

  ngOnInit() {
  }

}
