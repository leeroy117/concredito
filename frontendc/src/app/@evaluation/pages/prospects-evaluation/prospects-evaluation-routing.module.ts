import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProspectsEvaluationComponent } from './prospects-evaluation.component';


const routes: Routes = [
  {
    path: '',
    component: ProspectsEvaluationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectsEvaluationRoutingModule { }
