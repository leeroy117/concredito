import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotersComponent } from './promoters.component';


const routes: Routes = [
  {
    path: '',
    component: PromotersComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./promoters-home/promoters-home.module')
          .then(m => m.PromotersHomeModule)
      },
      {
        path: 'prospectos',
        loadChildren: () => import('./prospects-promoters/prospects-promoters.module')
          .then(m => m.ProspectsPromotersModule)
      },
      {
        path: 'prospectos/ver/:id',
        loadChildren: () => import('./get-prospect/get-prospect.module')
          .then(m => m.GetProspectModule)
      },
      {
        path: 'nuevo_prospecto',
        loadChildren: () => import('./new-prospect/new-prospect.module')
          .then(m => m.NewProspectModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotersRoutingModule { }
