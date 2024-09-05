import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidaAlumPage } from './bienvenida-alum.page';

const routes: Routes = [
  {
    path: '',
    component: BienvenidaAlumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienvenidaAlumPageRoutingModule {}
