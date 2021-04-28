import { Component, OnInit, OnDestroy } from '@angular/core';
// Forms
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// Interface
import { IProspect } from 'src/app/models/prospect.interface';
import { IResponse } from 'src/app/models/response.interface';
// Services
import { ProspectService } from 'src/app/servicios/prospect.service';
// Material
import { MatDialog } from '@angular/material/dialog';
// rxjs
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DialogComponent } from '../../../@shared/dialog/dialog.component';

@Component({
  selector: 'app-get-prospect',
  templateUrl: './get-prospect.component.html',
  styleUrls: ['./get-prospect.component.css']
})
export class GetProspectComponent implements OnInit, OnDestroy {

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
    observaciones: new FormControl({ value: '', disabled: true }, [Validators.required]),
    status: new FormControl({ value: '', disabled: true }),
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

  exit() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      height: '110px',
      data: '¿Esta seguro que desea salir?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['prospectos']);
      }
    });
  }
}
