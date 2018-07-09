import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import * as firebase from 'firebase/app';
import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
  }

  isLogginActive(): Observable<any>{
    return this.afAuth.authState.pipe(
      take(1),
      map((authState) => !!authState),
      tap(authenticated => {
        if (!authenticated) this.router.navigate(['/login'])
      })
    )
  }
  
  googleLogin() {
    const provider = new auth.GoogleAuthProvider()
    return this.afAuth.auth.signInWithPopup(provider);
  }

  emailCreate(user: any){
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  emailLogin(user:any){
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}
