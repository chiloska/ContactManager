import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService, private router: Router) {
    this._auth.isLogginActive().subscribe(loggin => {
      console.log(loggin);
      if(loggin) this.router.navigate(['/dashboard'])
    })
  }

  ngOnInit() {
  }

  googleLogin() {
    //console.log('Login')
    this._auth.googleLogin()
      .then(success => {
        console.log(success);
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        alert('Error to login')
      })
  }

}
