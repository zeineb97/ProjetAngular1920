import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface Artisan {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  gouvernerat?: string;
  delegation?: string;
  localite?: string;

}


@Injectable({ providedIn: 'root' })

export class AuthService {

  artisan: Observable<Artisan>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {

    //// Get auth data, then get firestore user document || null
    this.artisan = this.afAuth.authState.pipe(
      switchMap(artisan => {
        if (artisan) {
          return this.afs.doc<Artisan>(`Artisans/${artisan.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    )
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }


  private updateUserData(artisan) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Artisans/${artisan.uid}`);

    const data: Artisan = {
      uid: artisan.uid,
      email: artisan.email,
      displayName: artisan.displayName,
      photoURL: artisan.photoURL
    }

    return userRef.set(data, { merge: true })

  }


  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}