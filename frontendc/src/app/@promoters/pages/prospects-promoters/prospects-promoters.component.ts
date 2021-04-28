import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IProspectList } from 'src/app/models/prospect-list.interface';
import { ProspectService } from 'src/app/servicios/prospect.service';
import { IResponse } from '../../../models/response.interface';

@Component({
  selector: 'app-prospects-promoters',
  templateUrl: './prospects-promoters.component.html',
  styleUrls: ['./prospects-promoters.component.css']
})
export class ProspectsPromotersComponent implements OnInit {
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
        console.log(this.prospects);
      });
  }

  getProspect(id) {
    this.router.navigate(['prospectos/ver', id]);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}


