import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollectionGroup} from '@angular/fire/firestore';
import { Offre } from '../model/Offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {



  OffreRef: AngularFirestoreCollectionGroup<Offre> = null;
  constructor(private db: AngularFirestore) {
    this.OffreRef = db.collectionGroup('Offre');
  }

  createOffre(artisanKey, value) {
    return this.db.collection('users').doc(artisanKey).collection('offres').add({
      name: value.name,
      offretype: value.offretype,
      description: value.description
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
