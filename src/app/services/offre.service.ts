import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollectionGroup} from '@angular/fire/firestore';
import { Offre } from '../model/Offre';
import {resolve} from "url";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OffreService {



  OffreRef: AngularFirestoreCollectionGroup<Offre> = null;
  constructor(private db: AngularFirestore) {
    this.OffreRef = db.collectionGroup('Offre');
  }

  createOffre(artisanKey, value) {
    return this.db.collection('Artisan').doc(artisanKey).collection('offres').add({
      name: value,
      offretype: 'value.offretype',
      description: 'value.description'
    });
  }

  /*getAllOffres() {
    let Offres = this.db.collectionGroup('Offre');
    Offres.get().then(function(querySnapshot) {
      querySnapshot.forEach( (doc) => {
        console.log(doc.id, ' => ', doc.data());
      });
    });
  }*/

  getAllOffres() {
    this.db.collectionGroup('offres').snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(doc => {
            return{
              id: doc.payload.doc.id,
              data: doc.payload.doc.data()
            };
          });
        })
      );
   /* const o = this.db.collectionGroup('offres');
    o.get().subscribe( (querySnapshot) => {
      resolve(querySnapshot);
      console.log(querySnapshot);
    });*/
  }

  getOffreOfArtisan(artisanKey: string) {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('/users').doc(artisanKey).collection('/offres').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        });
    });
  }

  updateOffre(artisanKey, offreKey, value) {
    return this.db.collection('/users').doc(artisanKey).collection('/offres').doc(offreKey).set(value);
    // return this.offreRef.doc(offreKey).set(value);
  }

  deleteOffre(artisanKey, offreKey) {
    return this.db.collection('/users').doc(artisanKey).collection('/offres').doc(offreKey).delete();
  }



}
