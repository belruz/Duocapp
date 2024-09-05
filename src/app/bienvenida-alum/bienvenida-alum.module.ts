import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienvenidaAlumPageRoutingModule } from './bienvenida-alum-routing.module';

import { BienvenidaAlumPage } from './bienvenida-alum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienvenidaAlumPageRoutingModule
  ],
  declarations: [BienvenidaAlumPage]
})
export class BienvenidaAlumPageModule {}
