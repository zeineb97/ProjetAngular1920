import { Injectable } from '@angular/core';
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



}
