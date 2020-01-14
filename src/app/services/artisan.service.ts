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
  telNumber?: string;
  gouvernerat?: string;
  delegation?: string;
  localite?: string;
  complete?: boolean;

}


@Injectable({ providedIn: 'root' })

export class ArtisanService {

  artisan: Observable<Artisan>;
  private id: any | string;
  user: any;



  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {


    //// Get auth data, then get firestore user document || null
    this.artisan = this.afAuth.authState.pipe(
      switchMap(artisan => {
        if (artisan) {
          return this.afs.doc<Artisan>(`Artisans/${artisan.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }


  private updateUserData(artisan) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Artisans/${artisan.uid}`);

    const data: Artisan = {
      uid: artisan.uid,
      email: artisan.email,
      displayName: artisan.displayName,
      photoURL: artisan.photoURL
    };

    return userRef.set(data, { merge: true });

  }


  public updateArtisan(artisan, artisanForm) {

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Artisans/${artisan.uid}`);
    artisan.complete = true;
    const data: Artisan = {
      uid: artisan.uid,
      email: artisan.email,
      displayName: artisan.displayName,
      photoURL: artisan.photoURL,
      telNumber: artisanForm.telNumber,
      gouvernerat: artisanForm.gouvernerat,
      delegation: artisanForm.delegation,
      localite: artisanForm.localite,
      complete: artisan.complete,
    };

    return userRef.set(data, { merge: true }).then(function () {
      console.log("Document successfully written!");

    })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

  }


  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  authenticated(): boolean {
    return this.afAuth.authState !== null;
  }
  getArtisanId(): Observable<any> {
    if (this.authenticated()) {
      return this.afAuth.authState;
    } else {
      return null;
    }

  }



  getArtisanById(key: string): Observable<any> {

    return this.afs.collection('Artisans').doc(key).get();

  }




}
