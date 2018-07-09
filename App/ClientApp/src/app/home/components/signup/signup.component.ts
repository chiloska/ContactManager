import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth'
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('formData') form: any; email: any; password: any;
  constructor(private _auth: AuthService, private fbAuth: AngularFireAuth, private router: Router) {
    this.fbAuth.user.subscribe(user => {
      console.log(user)
      if (user != null) {
        this.router.navigate(['/dashboard'])
      }
    }, err => {
      console.log(err)
    })
  }

  ngOnInit() {
  }

  create(formData) {
    console.log(formData);
    if (formData.valid) {
      console.log(formData.value);
      this._auth.emailCreate(formData.value)
        .then(success => {
          console.log(success);
          this.router.navigate(['/dashboard']);
        })
        .catch(err => {
          if (err.code = 'auth/email-already-in-use') {
            alert(err.message)
            this.form.reset()
          }
          console.log(err);
        })
    }
  }
}
