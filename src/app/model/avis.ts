export class Avis {
  demandeurId?: string ;
  avis?: string ;


  constructor(artisanId = '', avis = '') {
    this.demandeurId = artisanId;
    this.avis = avis;
  }


}
