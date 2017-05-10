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

  logout() {
    this.afb.logout();
  }

  ngOnInit() {
  }

}
