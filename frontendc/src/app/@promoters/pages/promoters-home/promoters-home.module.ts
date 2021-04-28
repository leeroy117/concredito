import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotersHomeRoutingModule } from './promoters-home-routing.module';
import { PromotersHomeComponent } from './promoters-home.component';


@NgModule({
  declarations: [PromotersHomeComponent],
  imports: [
    CommonModule,
    PromotersHomeRoutingModule
  ]
})
export class PromotersHomeModule { }
