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
import { AngularFireAuth } from '@angular/fire/auth';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { AddComponent } from './add/add.component';
import { CatalogComponent } from './catalogTech/catalog/catalog.component';
import { ServicesListeComponent } from './catalogTech/services-liste/services-liste.component';
import { ServiceItemComponent } from './catalogTech/service-item/service-item.component';
import { ServiceDetailsComponent } from './catalogTech/service-details/service-details.component';
import { TitleFilterPipe } from './catalogTech/filters/title-filter.pipe';
import { ArtisanProfileComponent } from './artisan-profile/artisan-profile.component';
import { DemandeurProfileComponent } from './demandeur-profile/demandeur-profile.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { AvisComponent } from './avis/avis.component';
import { CompleteArtisanProfileComponent } from './complete-artisan-profile/complete-artisan-profile.component';
import { LoginAsArtisanComponent } from './login-as-artisan/login-as-artisan.component';
import { LoginAsDemandeurComponent } from './login-as-demandeur/login-as-demandeur.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    AddComponent,
    CatalogComponent,
    ServicesListeComponent,
    ServiceItemComponent,
    ServiceDetailsComponent,
    ArtisanProfileComponent,
    DemandeurProfileComponent,
    ServiceDetailsComponent,
    TitleFilterPipe,
    DemandeurProfileComponent,
    CompleteArtisanProfileComponent,
    DemandeurProfileComponent,
    AddOffreComponent,
    AvisComponent,
    LoginAsArtisanComponent,
    LoginAsDemandeurComponent
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
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
