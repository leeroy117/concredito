import { Component, OnInit, OnDestroy } from '@angular/core';
// forms
import { FormControl, FormGroup, Validators } from '@angular/forms';
// material
import { MatDialog } from '@angular/material/dialog';
// router
import { ActivatedRoute, Router } from '@angular/router';
// rxjs
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// dialog
import { DialogComponent } from 'src/app/@shared/dialog/dialog.component';
// alert
import { basicAlert } from 'src/app/@shared/toasts';
import { TYPE_ALERT } from 'src/app/@shared/values.config';
// interfaces
import { IProspect } from 'src/app/models/prospect.interface';
import { IResponse } from 'src/app/models/response.interface';
// services
import { ProspectService } from 'src/app/servicios/prospect.service';

@Component({
  selector: 'app-prospect-edit',
  templateUrl: './prospect-edit.component.html',
  styleUrls: ['./prospect-edit.component.css']
})
export class ProspectEditComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  response: IResponse;
  prospect: IProspect;
  message: string;

  editForm = new FormGroup({
    id_prospecto: new FormControl(''),
    nombre: new FormControl(''),
    primer_apellido: new FormControl(''),
    segundo_apellido: new FormControl(''),
    calle: new FormControl(''),
    numero: new FormControl(''),
    colonia: new FormControl(''),
    cp: new FormControl(''),
    tel: new FormControl(''),
    rfc: new FormControl(''),
    observaciones: new FormControl('', [Validators.required]),
    status: new FormControl(''),
  });

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private prospectService: ProspectService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    const prospectId = this.activeRouter.snapshot.paramMap.get('id');

    this.prospectService.getOneProspect(prospectId).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(data => {
      this.response = data;
      this.prospect = this.response.item[0];
      this.editForm.setValue({
        id_prospecto: this.prospect.id_prospecto,
        nombre: this.prospect.nombre,
        primer_apellido: this.prospect.primer_apellido,
        segundo_apellido: this.prospect.segundo_apellido,
        calle: this.prospect.calle,
        numero: this.prospect.numero,
        colonia: this.prospect.colonia,
        cp: this.prospect.cp,
        tel: this.prospect.tel,
        rfc: this.prospect.rfc,
        observaciones: this.prospect.observaciones,
        status: this.prospect.status
      });

    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  postForm(form: IProspect) {
    console.log(form);
    this.prospectService.updateProspect(form).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(data => {
      console.log(data);
      this.response = data;
      this.message = this.response.message;
      basicAlert(TYPE_ALERT.SUCCESS, this.message);
      this.router.navigate(['evaluacion/prospectos']);
    });

  }

  getErrorMessage(field: string): string {
    let errorMessage;
    if (this.editForm.get(field).errors.required) {
      errorMessage = 'El campo ' + field + ' es requerido.';
    } else if (this.editForm.get(field).hasError('pattern')) {
      errorMessage = 'El campo ' + field + ' no es valido.';
    }

    return errorMessage;
  }

  isValidField(field: string): boolean {
    return (
      (this.editForm.get(field).touched || this.editForm.get(field).dirty) && !this.editForm.get(field).valid
    );
  }

  exit() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      height: '110px',
      data: '¿Esta seguro que desea salir?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['evaluacion/prospectos']);
      }
    });
  }

}
