import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProspectEditComponent } from './prospect-edit.component';


const routes: Routes = [
  {
    path: '',
    component: ProspectEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectEditRoutingModule { }
