import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { CatalogComponent } from './catalogTech/catalog/catalog.component';
import { ArtisanProfileComponent } from './artisan-profile/artisan-profile.component';
import { DemandeurProfileComponent } from './demandeur-profile/demandeur-profile.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { CompleteArtisanProfileComponent } from './complete-artisan-profile/complete-artisan-profile.component'
import { AuthArtisanCompleteGuard } from "./auth-artisan-complete.guard";
import { LoginAsArtisanComponent } from "./login-as-artisan/login-as-artisan.component";
import { AuthArtisanNotCompleteGuard } from "./auth-artisan-not-complete.guard";
import { LoginAsDemandeurComponent } from "./login-as-demandeur/login-as-demandeur.component";
import { AuthDemandeurGuard } from "./auth-demandeur.guard";
import { ConsultingGuard } from "./consulting.guard";
const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: CatalogComponent
      },
      {
        path: 'artisanlogin',
        component: LoginAsArtisanComponent
      },
      {
        path: 'demandeurlogin',
        component: LoginAsDemandeurComponent
      },
      {
        path: 'completeprofile',
        component: CompleteArtisanProfileComponent,
        canActivate: [AuthArtisanNotCompleteGuard],
      },
      {
        path: 'profilartisan/:id',
        component: ArtisanProfileComponent,
        canActivate: [ConsultingGuard]
      },
      {
        path: 'profildemandeur',
        component: DemandeurProfileComponent,
        canActivate: [AuthDemandeurGuard]
      },
      {
        path: 'addoffre',
        component: AddOffreComponent,
        canActivate: [AuthArtisanCompleteGuard]
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
