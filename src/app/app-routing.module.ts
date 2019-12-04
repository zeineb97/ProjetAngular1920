import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { AddComponent } from './add/add.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { from } from 'rxjs';
import {CatalogComponent} from './catalogTech/catalog/catalog.component';

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
    path: 'adduser',
    component: AddUserComponent
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
