import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultLayoutComponent} from './default-layout/default-layout.component';
import {AddComponent} from './add/add.component';


const routes: Routes = [
  {
    path : '',
    component : DefaultLayoutComponent,
    children : [
      {
        path : '',
        component : AddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
