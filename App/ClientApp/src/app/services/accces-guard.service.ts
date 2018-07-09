import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AcccesGuardService implements CanActivate {
  constructor(private auth: AngularFireAuth, private router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.authState.pipe(
      take(1),
      map((authState) => !!authState),
      tap(authenticated => {
        console.log(authenticated)
        if (!authenticated) this.router.navigate(['/login'])
      })
    )
  }
}