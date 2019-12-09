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
import { AddUserComponent } from './users/add-user/add-user.component';

import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { AddComponent } from './add/add.component';
import { CatalogComponent } from './catalogTech/catalog/catalog.component';
import { ServicesListeComponent } from './catalogTech/services-liste/services-liste.component';
import { ServiceItemComponent } from './catalogTech/service-item/service-item.component';
import { ServiceDetailsComponent } from './catalogTech/service-details/service-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    AddComponent,
    AddUserComponent,
    CatalogComponent,
    ServicesListeComponent,
    ServiceItemComponent,
    ServiceDetailsComponent
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
