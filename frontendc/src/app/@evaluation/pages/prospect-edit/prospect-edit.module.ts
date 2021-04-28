import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectEditRoutingModule } from './prospect-edit-routing.module';
import { SharedModule } from 'src/app/@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProspectEditComponent } from './prospect-edit.component';


@NgModule({
  declarations: [ProspectEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ProspectEditRoutingModule
  ]
})
export class ProspectEditModule { }
