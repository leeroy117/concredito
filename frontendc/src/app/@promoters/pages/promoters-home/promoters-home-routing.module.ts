import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotersHomeComponent } from './promoters-home.component';


const routes: Routes = [
  {
    path: '',
    component: PromotersHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotersHomeRoutingModule { }
