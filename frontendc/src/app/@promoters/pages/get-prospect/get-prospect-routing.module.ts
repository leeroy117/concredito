import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetProspectComponent } from './get-prospect.component';


const routes: Routes = [
  {
    path: '',
    component: GetProspectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetProspectRoutingModule { }
