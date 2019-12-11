import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgxLoadingModule } from 'ngx-loading';
import { AddArtisanComponent } from './users/artisan/add-artisan/add-artisan.component';
import { DetailsArtisanComponent } from './users/artisan/details-artisan/details-artisan.component';
import { ListArtisanComponent } from './users/artisan/list-artisan/list-artisan.component';

@NgModule({
  declarations: [
    AppComponent,
    AddArtisanComponent,
    DetailsArtisanComponent,
    ListArtisanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    // ReactiveFormsModule,
    AgGridModule.withComponents([]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
