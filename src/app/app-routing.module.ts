import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Primer1Component } from './primer1/primer1.component';

const routes: Routes = [
  {path: 'primer1', component: Primer1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { 

}
