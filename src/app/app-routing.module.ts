import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { AddComponent } from './add/add.component';
import { AddArtisanComponent } from './users/artisan/add-artisan/add-artisan.component';
import { ListArtisanComponent } from './users/artisan/list-artisan/list-artisan.component';
import { from } from 'rxjs';
import { CatalogComponent } from './catalogTech/catalog/catalog.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ArtisanProfileComponent } from './artisan-profile/artisan-profile.component';
import { DemandeurProfileComponent } from './demandeur-profile/demandeur-profile.component';
import {TestComponent} from "./test/test.component";
import {TestsComponent} from "./tests/tests.component";
const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: AddComponent
      }

    ]
  },
  {
    path: 'addartisan',
    component: AddArtisanComponent
  },
  {
    path: 'listartisan',
    component: ListArtisanComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'profilartisan',
    component: ArtisanProfileComponent
  },
  {
    path: 'profildemandeur',
    component: DemandeurProfileComponent
  },
  {
    path: 'test',
    component: TestsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
