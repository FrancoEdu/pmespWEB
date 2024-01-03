import {Injectable, Injector} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IBaseResponse} from "../../Models/IBase/IBaseResponse";
import {Observable, finalize, timeout} from "rxjs";
import { LoadingService } from '../Loading/loading.service';
import {_environment} from "../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class IBaseService<T>{

  protected _httpClient: HttpClient;
  protected _apiURL!: string;
  protected _loadingService: LoadingService;

  constructor(
    protected _injector: Injector
  ) {
    this._httpClient = _injector.get(HttpClient);
    this._loadingService = _injector.get(LoadingService);
  }

  getAll(loadingDescription: any = null): Observable<IBaseResponse | any>{
    this._loadingService.show(loadingDescription);
    return this._httpClient.get(this._apiURL).pipe(
      finalize(() => this._loadingService.hide())
    );
  }

  getById(id: string, loadingDescription: any = null): Observable<IBaseResponse | any>{
    this._loadingService.show(loadingDescription);
    const URL = `${this._apiURL}/${id}`
    return this._httpClient.get(URL).pipe(
      timeout(_environment.timeOutAPI),
      finalize(() => this._loadingService.hide())
    );
  }

  getBy(path: any, loadingDescription: any = null): Observable<IBaseResponse | any>{
    this._loadingService.show(loadingDescription);
    const URL = `${this._apiURL}/${path}`
    return this._httpClient.get(URL).pipe(
      timeout(_environment.timeOutAPI),
      finalize(() => this._loadingService.hide())
    );
  }

  post(data: any, path: string = '', loadingDescription: any = null): Observable<IBaseResponse | any>{
    this._loadingService.show(loadingDescription);

    let URL = this._apiURL;
    if(path != ''){
      URL = `${URL}/${path}`
    }

    return this._httpClient.post(URL, data).pipe(
      timeout(_environment.timeOutAPI),
      finalize(() => this._loadingService.hide())
    );
  }

  update(data: any, path: string = '', loadingDescription: any = null): Observable<IBaseResponse | any>{
    this._loadingService.show(loadingDescription);

    let URL = this._apiURL;
    if(path != ''){
      URL = `${URL}/${path}`
    }

    return this._httpClient.put(URL, data).pipe(
      timeout(_environment.timeOutAPI),
      finalize(() => this._loadingService.hide())
    );
  }

  delete(id: string, path: string = '', loadingDescription: any = null): Observable<IBaseResponse | any>{
    this._loadingService.show(loadingDescription);

    let URL = this._apiURL;
    if(path != ''){
      URL = `${URL}/${path}`
    }

    URL = `${URL}/${id}`
    return this._httpClient.delete(URL).pipe(
      timeout(_environment.timeOutAPI),
      finalize(() => this._loadingService.hide())
    );
  }

  search(data: any, loadingDescription: any = null, loadShow: boolean = true): Observable<IBaseResponse | any>{

    if(loadShow === true){
      this._loadingService.show(loadingDescription);
    }

    let URL = this._apiURL + "/search";

    return this._httpClient.post(URL, data).pipe(
      timeout(_environment.timeOutAPI),
      finalize(() => this._loadingService.hide())
    );
  }
}
