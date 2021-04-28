import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationRoutingModule } from './evaluation-routing.module';
import { EvaluationComponent } from './evaluation.component';
import { HeaderComponent } from '../../@evaluation/core/header/header.component';
import { SidebarComponent } from '../../@evaluation/core/sidebar/sidebar.component';



@NgModule({
  declarations: [EvaluationComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    EvaluationRoutingModule
  ]
})
export class EvaluationModule { }
