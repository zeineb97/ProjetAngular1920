import {Avis} from "../model/avis";
import {AngularFirestore} from "@angular/fire/firestore";
import {ArtisanService} from "./artisan.service";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class AvisService {
  constructor(private db: AngularFirestore) {

  }
  ajouterAvis(avis: Avis, key: string) {
    return this.db.collection('Artisans').doc(key).collection('Avis').add({
      demandeurId : avis.demandeurId,
      avis : avis.avis
    });
  }

}
