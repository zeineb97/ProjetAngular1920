import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OffreService } from "../services/offre.service";
import { Offre } from "../model/Offre";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {
  imgSrc = 'assets/Images/default.png';
  selectedImage: any = null;
  selectedImagesList: any = null;
  constructor(private offreService: OffreService, private router: Router) { }

  ngOnInit() {

  }
  addOffre(formulaire: NgForm) {
    const artisanId = localStorage.getItem('token');
    const offre = new Offre(artisanId, formulaire.value.nom, formulaire.value.description, 'https://ae01.alicdn.com/kf/HTB1R.kLPVXXXXajXpXXq6xXFXXX9.jpg', ['https://ae01.alicdn.com/kf/HTB1R.kLPVXXXXajXpXXq6xXFXXX9.jpg', 'https://ae01.alicdn.com/kf/HTB1R.kLPVXXXXajXpXXq6xXFXXX9.jpg'], formulaire.value.prix);
    this.offreService.createOffre(offre).then(() => {
      this.router.navigate(['']);
    });
  }
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = 'assets/Images/default.png';
      this.selectedImage = null;
    }
  }
  detectImages(event: any) {
    this.selectedImagesList = event.target.files;
    console.log(this.selectedImagesList);
  }

  submit() {
    //  const imagepath = '${this.selectedImage.name}_${new Date().getTime()}';
    // console.log(imagepath);
  }
}
