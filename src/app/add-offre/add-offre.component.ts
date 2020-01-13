import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {
   imgSrc = 'assets/Images/default.png';
   selectedImage: any = null ;
  constructor() { }

  ngOnInit() {

  }
  showPreview(event: any) {
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e: any ) => this.imgSrc = e.target.result;
        reader.readAsDataURL(event.target.files[0]);
        this.selectedImage = event.target.files[0];
      } else {
        this.imgSrc = 'assets/Images/default.png';
        this.selectedImage = null;
      }

  }
}
