import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProspectRoutingModule } from './new-prospect-routing.module';
import { SharedModule } from 'src/app/@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NewProspectComponent } from './new-prospect.component';


@NgModule({
  declarations: [NewProspectComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    NewProspectRoutingModule
  ]
})
export class NewProspectModule { }
