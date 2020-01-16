export class Avis {
  demandeurId?: string;
  demandeurName?: string;
  texte?: string;


  constructor(artisanId = '', demandeurName = '', texte = '') {
    this.demandeurId = artisanId;
    this.demandeurName = demandeurName;
    this.texte = texte;
  }


}
