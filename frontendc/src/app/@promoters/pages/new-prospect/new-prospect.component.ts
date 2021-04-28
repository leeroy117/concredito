import { Component, OnInit, OnDestroy } from '@angular/core';
// Forms
import { FormControl, FormGroup, Validators } from '@angular/forms';
// router
import { Router, ActivatedRoute } from '@angular/router';
// material
import { MatDialog } from '@angular/material/dialog';
// rxjs
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// interfaces
import { IResponse } from 'src/app/models/response.interface';
import { IProspect } from 'src/app/models/prospect.interface';
// services
import { ProspectService } from 'src/app/servicios/prospect.service';
// dialog to leave
import { DialogComponent } from 'src/app/@shared/dialog/dialog.component';
// toast
import { basicAlert } from '../../../@shared/toasts';
// type alert
import { TYPE_ALERT } from '../../../@shared/values.config';
import { TYPE_REGULAR_EXPRESSION } from 'src/app/@shared/regular-expresions.config';

@Component({
  selector: 'app-new-prospect',
  templateUrl: './new-prospect.component.html',
  styleUrls: ['./new-prospect.component.css']
})
export class NewProspectComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  response: IResponse;
  message: string;

  newForm = new FormGroup({
    id_prospecto: new FormControl(''),
    nombre: new FormControl('', [
      Validators.required,
      // Validators.pattern(TYPE_REGULAR_EXPRESSION.ONLY_LETTERS)
    ]),
    primer_apellido: new FormControl('', [
      Validators.required,
      // Validators.pattern(TYPE_REGULAR_EXPRESSION.ONLY_LETTERS)
    ]),
    segundo_apellido: new FormControl('', [
      // Validators.pattern(TYPE_REGULAR_EXPRESSION.ONLY_LETTERS)
    ]),
    calle: new FormControl('', [Validators.required]),
    numero: new FormControl('', [
      Validators.required,
      Validators.pattern(TYPE_REGULAR_EXPRESSION.NUMBER)
    ]),
    colonia: new FormControl('', [Validators.required]),
    cp: new FormControl('', [
      Validators.required,
      Validators.pattern(TYPE_REGULAR_EXPRESSION.ZIP)
    ]),
    tel: new FormControl('', [
      Validators.required,
      // Validators.pattern(TYPE_REGULAR_EXPRESSION.PHONE_NUMBER)
    ]),
    rfc: new FormControl('', [
      Validators.required,
      // Validators.pattern(TYPE_REGULAR_EXPRESSION.RFC)
    ]),
    status: new FormControl('', [Validators.required]),
  });
  constructor(public dialog: MatDialog, private prospectService: ProspectService, private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  postForm(form: IProspect) {
    console.log(form);
    this.prospectService.storeProspect(form).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(data => {
      this.response = data;
      this.message = data.message;
      basicAlert(TYPE_ALERT.SUCCESS, this.message);
      this.router.navigate(['prospectos']);
    });
  }

  getErrorMessage(field: string): string {
    let errorMessage;
    if (this.newForm.get(field).errors.required) {
      errorMessage = 'El campo ' + field + ' es requerido.';
    } else if (this.newForm.get(field).hasError('pattern')) {
      errorMessage = 'El campo ' + field + ' no es valido.';
    }

    return errorMessage;
  }

  isValidField(field: string): boolean {
    return (
      (this.newForm.get(field).touched || this.newForm.get(field).dirty) && !this.newForm.get(field).valid
    );
  }

  exit() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      height: '110px',
      data: '¿Esta seguro que desea salir?. Se perderan los datos.'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['prospectos']);
      }
    });
  }

}
