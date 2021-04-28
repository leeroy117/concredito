import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectsEvaluationRoutingModule } from './prospects-evaluation-routing.module';
import { ProspectsEvaluationComponent } from './prospects-evaluation.component';


@NgModule({
  declarations: [ProspectsEvaluationComponent],
  imports: [
    CommonModule,
    ProspectsEvaluationRoutingModule
  ]
})
export class ProspectsEvaluationModule { }
