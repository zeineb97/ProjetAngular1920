import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface Demandeur {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;

}


@Injectable({ providedIn: 'root' })

export class DemandeurService {

  demandeur: Observable<Demandeur>;
  public key = 'token';

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {

    //// Get auth data, then get firestore user document || null
    this.demandeur = this.afAuth.authState.pipe(
      switchMap(demandeur => {
        if (demandeur) {
          return this.afs.doc<Demandeur>(`Demandeurs/${demandeur.uid}`).valueChanges()
        } else {
          return of(null);
        }
      })
    );
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


  private updateUserData(demandeur) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Demandeurs/${demandeur.uid}`);

    const data: Demandeur = {
      uid: demandeur.uid,
      email: demandeur.email,
      displayName: demandeur.displayName,
      photoURL: demandeur.photoURL
    }

    localStorage.setItem(this.key, data.uid);
    localStorage.setItem('role', 'demandeur');
    return userRef.set(data, { merge: true })

  }


  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  getDemandeurById(id:string){
    return this.afs.collection('Demandeurs').doc(id).get();
  }
}
