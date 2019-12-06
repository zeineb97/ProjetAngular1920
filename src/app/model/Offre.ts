export class Offre {
  id?: number ;
  nom?: string ;
  descripton?: string ;
  imagePrincipal?: string ;
  imagesList?: string[] ;
  prix?: number ;
  idArtisan?: number ;

  constructor(id = 0, nom = '', descripton = '', imagePrincipal = '', imagesList = [], prix = 0, idArtisan = 0) {
    this.id = id;
    this.nom = nom;
    this.descripton = descripton;
    this.imagePrincipal = imagePrincipal;
    this.imagesList = imagesList;
    this.prix = prix;
    this.idArtisan = idArtisan;
  }


}

