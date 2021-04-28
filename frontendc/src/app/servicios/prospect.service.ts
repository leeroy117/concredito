import { Injectable } from '@angular/core';
import { IProspect } from '../models/prospect.interface';
import { IResponse } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global.service';

@Injectable({
    providedIn: 'root'
})
export class ProspectService {
    private url = Global.url + 'prospectos';

    constructor(private http: HttpClient) {

    }

    getProspects(): Observable<IResponse> {
        return this.http.get<IResponse>(this.url);
    }

    getOneProspect(id): Observable<IResponse> {
        const prospectUrl = this.url + '/' + id;
        return this.http.get<IResponse>(prospectUrl);
    }

    // Utilizado solo en evaluacion
    updateProspect(form: IProspect): Observable<IResponse> {
        const id = form.id_prospecto;
        const prospectUrl = this.url + '/' + id;
        return this.http.put<IResponse>(prospectUrl, form);
    }

    // Utilizado solo en promotores
    storeProspect(form: IProspect): Observable<IResponse> {
        return this.http.post<IResponse>(this.url, form);
    }
}
