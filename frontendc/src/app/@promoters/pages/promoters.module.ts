import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotersRoutingModule } from './promoters-routing.module';
import { PromotersComponent } from './promoters.component';
import { SidebarComponent } from '../core/sidebar/sidebar.component';
import { HeaderComponent } from '../core/header/header.component';



@NgModule({
  declarations: [PromotersComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    PromotersRoutingModule
  ]
})
export class PromotersModule { }
