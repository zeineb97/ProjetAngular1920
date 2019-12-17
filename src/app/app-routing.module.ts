import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { AddComponent } from './add/add.component';
import { AddArtisanComponent } from './users/artisan/add-artisan/add-artisan.component';
import { ListArtisanComponent } from './users/artisan/list-artisan/list-artisan.component';
import { from } from 'rxjs';
import { CatalogComponent } from './catalogTech/catalog/catalog.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
