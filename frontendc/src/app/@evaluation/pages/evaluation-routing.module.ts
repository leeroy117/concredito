import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluationComponent } from './evaluation.component';


const routes: Routes = [
  {
    path: 'evaluacion',
    component: EvaluationComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./evaluation-home/evaluation-home.module')
          .then(m => m.EvaluationHomeModule)
      },
      {
        path: 'prospectos',
        loadChildren: () => import('./prospects-evaluation/prospects-evaluation.module')
          .then(m => m.ProspectsEvaluationModule)
      },
      {
        path: 'prospectos/editar/:id',
        loadChildren: () => import('./prospect-edit/prospect-edit.module')
          .then(m => m.ProspectEditModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationRoutingModule { }
