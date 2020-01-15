export class Offre {
  artisanId?: string ;
  nom?: string ;
  description?: string ;
  imagePrincipal?: string ;
  imagesList?: string[] ;
  prix?: number ;

  constructor(artisanId = '', nom = '', description = '', imagePrincipal = '', imagesList = [], prix = 0) {
    this.artisanId = artisanId;
    this.nom = nom;
    this.description = description;
    this.imagePrincipal = imagePrincipal;
    this.imagesList = imagesList;
    this.prix = prix;
  }


}

