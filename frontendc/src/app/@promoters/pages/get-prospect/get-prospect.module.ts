import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetProspectRoutingModule } from './get-prospect-routing.module';
import { GetProspectComponent } from './get-prospect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/@shared/shared.module';


@NgModule({
  declarations: [GetProspectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
    GetProspectRoutingModule
  ]
})
export class GetProspectModule { }
