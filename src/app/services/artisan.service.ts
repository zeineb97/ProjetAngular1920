/*import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Artisan } from '../model/Artisan';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {

  private dbPath = '/Artisan';

  ArtisansRef: AngularFirestoreCollection<Artisan> = null;

  constructor(private db: AngularFirestore) {
    this.ArtisansRef = db.collection(this.dbPath);
  }

  createArtisan(Artisan: Artisan): void {
    this.ArtisansRef.add({ ...Artisan });
  }


  getArtisansList(): AngularFirestoreCollection<Artisan> {
    return this.ArtisansRef;
  }



}*/

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import {from, Observable, of} from 'rxjs';
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

  getArtisanId(): Promise<any> {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Work Complete");
        if (this.authenticated()) {
          this.afAuth.authState.subscribe((user) => {
            resolve(user.uid);
          });
        } else {
          reject();
        }
      }, 1000);
    });
    return promise;

  }



}
