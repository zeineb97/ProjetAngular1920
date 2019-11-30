import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  monObservable: Observable<string>;
  mesImages = [
    'assets/Images/accueil0.jpg',
    'assets/Images/accueil1.jpg',
    'assets/Images/accueil2.jpg',
    'assets/Images/accueil3.jpg'
  ];
  currentImage: string;
  constructor() {
    this.currentImage = 'assets/Images/accueil0.jpg';
  }

  ngOnInit() {
    this.monObservable = new Observable(
      (observer) => {
        let i = 0;
        setInterval(
          () => {
            observer.next(this.mesImages[i % 4]);
            i++;
          }, 4000
        );

      }


    );
    this.monObservable.subscribe(
      (result) => {
       
        this.currentImage = result;
      }
    );


  }

}
