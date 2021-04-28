import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectsPromotersRoutingModule } from './prospects-promoters-routing.module';
import { ProspectsPromotersComponent } from './prospects-promoters.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ProspectsPromotersComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ProspectsPromotersRoutingModule
  ]
})
export class ProspectsPromotersModule { }
