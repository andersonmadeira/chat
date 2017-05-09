import { AngularFirebase2Service } from './angular-firebase2/angular-firebase2.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user: firebase.User = null;
  title = 'app works!';

  constructor(public afb: AngularFirebase2Service, private router: Router) {
    this.afb.subscribe(
      (auth: firebase.User) => {
        this.user = auth;
        this.router.navigate(['']);
        console.log(this.user);
      }, 
      () => {
        this.router.navigate(['login']);
        this.user = null;
      });
  }

  logout() {
    this.afb.logout();
  }

  isLoggedIn() {
    return this.user != null;
  }
}
