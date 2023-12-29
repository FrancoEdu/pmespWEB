import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Municipio } from '../../Models/Municipio/Municipio';
import { Observable, finalize, timeout } from 'rxjs';
import { LoadingService } from '../Loading/loading.service';
import { _environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {
  private ibgePoint: string = "https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome"

  constructor(
    private readonly _httpCliente: HttpClient,
    private readonly _loadingService: LoadingService
  ) { }

  getAllMunicipios(load: any = null): Observable<Municipio>{
    this._loadingService.show();
    return this._httpCliente.get(this.ibgePoint).pipe(
      timeout(_environment.timeOutAPI),
      finalize(() => this._loadingService.hide())
    );
  }
}
