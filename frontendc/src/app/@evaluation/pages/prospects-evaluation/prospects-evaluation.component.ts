import { Component, OnInit } from '@angular/core';
// router
import { Router } from '@angular/router';
// rxjs
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
// interfaces
import { IProspectList } from 'src/app/models/prospect-list.interface';
import { IResponse } from 'src/app/models/response.interface';
// services
import { ProspectService } from '../../../servicios/prospect.service';


@Component({
  selector: 'app-prospects-evaluation',
  templateUrl: './prospects-evaluation.component.html',
  styleUrls: ['./prospects-evaluation.component.css']
})
export class ProspectsEvaluationComponent implements OnInit {
  prospects: IProspectList[];
  response: IResponse;
  private unsubscribe$ = new Subject<void>();

  constructor(private prospectService: ProspectService, private router: Router) { }

  ngOnInit(): void {
    this.prospectService.getProspects()
      .pipe(
        takeUntil(this.unsubscribe$)
      ).subscribe(data => {
        this.response = data;
        this.prospects = this.response.item;
      });
  }

  getProspect(id) {
    this.router.navigate(['evaluacion/prospectos/editar', id]);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
