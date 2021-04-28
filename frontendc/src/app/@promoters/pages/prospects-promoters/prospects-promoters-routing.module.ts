import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProspectsPromotersComponent } from './prospects-promoters.component';


const routes: Routes = [
  {
    path: '',
    component: ProspectsPromotersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectsPromotersRoutingModule { }
