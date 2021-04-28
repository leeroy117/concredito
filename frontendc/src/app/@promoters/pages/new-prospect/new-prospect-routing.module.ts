import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProspectComponent } from './new-prospect.component';


const routes: Routes = [
  {
    path: '',
    component: NewProspectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProspectRoutingModule { }
