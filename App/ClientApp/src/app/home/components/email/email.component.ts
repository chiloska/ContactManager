import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  @ViewChild('formData') form: any;
  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formData) {
    console.log(formData);
    if (formData.valid) {
      console.log(formData.value);
      this._auth.emailLogin(formData.value)
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
