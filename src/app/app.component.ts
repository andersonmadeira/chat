import { AngularFirebase2Service } from './angular-firebase2/angular-firebase2.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean;
  title = 'app works!';

  constructor(public afb: AngularFirebase2Service, private router: Router) {
    this.afb.subscribe(
      (auth) => {
        console.log('Logged in');
        console.log(auth);
        
        this.router.navigate(['']);
        this.isLoggedIn = true;
      }, 
      () => {
        console.log('NOT Logged in');
        this.router.navigate(['login']);
        this.isLoggedIn = false;
      });
  }

  logout() {
    this.afb.logout();
  }
}
