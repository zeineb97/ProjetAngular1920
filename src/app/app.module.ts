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
import { AngularFireAuth } from '@angular/fire/auth';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { AddComponent } from './add/add.component';
import { CatalogComponent } from './catalogTech/catalog/catalog.component';
import { ServicesListeComponent } from './catalogTech/services-liste/services-liste.component';
import { ServiceItemComponent } from './catalogTech/service-item/service-item.component';
import { ServiceDetailsComponent } from './catalogTech/service-details/service-details.component';
import { TitleFilterPipe } from './catalogTech/filters/title-filter.pipe';
import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ArtisanProfileComponent } from './artisan-profile/artisan-profile.component';
import { DemandeurProfileComponent } from './demandeur-profile/demandeur-profile.component';
import { CompleteArtisanProfileComponent } from './complete-artisan-profile/complete-artisan-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    AddComponent,
    AddArtisanComponent,
    DetailsArtisanComponent,
    ListArtisanComponent,
    CatalogComponent,
    ServicesListeComponent,
    ServiceItemComponent,
    ServiceDetailsComponent,
    UserProfileComponent,
    ArtisanProfileComponent,
    DemandeurProfileComponent,
    ServiceDetailsComponent,
    TitleFilterPipe,
    DemandeurProfileComponent,
    CompleteArtisanProfileComponent
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
    NgxLoadingModule.forRoot({}),
    CoreModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
