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
      demandeurName : avis.demandeurName,
      texte : avis.texte
    });
  }

  getAvisById(idArtisan: string){
    return this.db.collection('Artisans').doc(idArtisan).collection('Avis').get();
  }

}
