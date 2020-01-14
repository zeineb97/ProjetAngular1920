import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { Offre } from '../model/Offre';
import { resolve } from 'url';
import { map } from 'rxjs/operators';
import { ArtisanService } from './artisan.service';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OffreService {



  OffreRef: AngularFirestoreCollectionGroup<Offre> = null;
  constructor(private db: AngularFirestore, private artisanService: ArtisanService) {
    this.OffreRef = db.collectionGroup('Offre');
  }

  /*createOffre(offre : Offre): Promise<any> {
    if (this.artisanService.authenticated()) {
      var Key = this.artisanService.getArtisanId();
    }

    return this.db.collection('Artisans').doc(Key).collection('offres').add({
      id : offre.id,
      nom : offre.nom,
      descripton : offre.descripton,
      imagePrincipal : offre.imagePrincipal,
      imagesList : offre.imagesList,
      prix : offre.prix
    });
  }*/


  getAllOffres(): Observable<any> {
    const alloffres = this.db.collectionGroup('offres');
    return alloffres.get();
    /*.subscribe( (querySnapshot) => {
    for ( let offre of querySnapshot.docs) {
      console.log(offre.data());
    }
  });*/
  }

  getOffreOfArtisan(artisanKey: string): Observable<any> {
    const offresofartisan = this.db.collection('Artisans').doc(artisanKey).collection('offres');
    return offresofartisan.get();
    /*.subscribe( (querySnapshot) => {
    for ( let offre of querySnapshot.docs) {
      console.log(offre.data());
    }
  });*/
  }

  /*getOffreOfCurrentArtisan(): Observable<any> {
    let key = this.artisanService.getArtisanId();
    console.log(key);
    return this.getOffreOfArtisan(key);
  }*/

  updateOffre(artisanKey, offreKey, value) {
    return this.db.collection('/Artisans').doc(artisanKey).collection('/offres').doc(offreKey).set(value);
    // return this.offreRef.doc(offreKey).set(value);
  }

  deleteOffre(artisanKey, offreKey) {
    return this.db.collection('/Artisans').doc(artisanKey).collection('/offres').doc(offreKey).delete();
  }



}
