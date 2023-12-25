import {Injectable, Injector} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IBaseResponse} from "../../Models/IBase/IBaseResponse";
import {_environment} from "../../../environment/environment";
import {Observable, timeout} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IBaseService<T>{

  protected _httpClient: HttpClient;
  protected _apiURL!: string;

  constructor(
    protected _injector: Injector
  ) {
    this._httpClient = _injector.get(HttpClient);
  }

  getAll(): Observable<IBaseResponse | any>{
    return this._httpClient.get(this._apiURL).pipe(timeout(_environment.timeOutAPI));
  }

  getById(id: string): Observable<IBaseResponse | any>{
    const URL = `${this._apiURL}/${id}`
    return this._httpClient.get(URL).pipe(timeout(_environment.timeOutAPI));
  }

  getBy(path: any): Observable<IBaseResponse | any>{
    const URL = `${this._apiURL}/${path}`
    return this._httpClient.get(URL).pipe(timeout(_environment.timeOutAPI));
  }

  post(data: any, path: string = ''): Observable<IBaseResponse | any>{
    let URL = this._apiURL;
    if(path != ''){
      URL = `${URL}/${path}`
    }

    return this._httpClient.post(URL, data).pipe(timeout(_environment.timeOutAPI));
  }

  update(data: any, path: string = ''): Observable<IBaseResponse | any>{
    let URL = this._apiURL;
    if(path != ''){
      URL = `${URL}/${path}`
    }

    return this._httpClient.put(URL, data).pipe(timeout(_environment.timeOutAPI));
  }

  delete(id: string, path: string = ''): Observable<IBaseResponse | any>{
    let URL = this._apiURL;
    if(path != ''){
      URL = `${URL}/${path}`
    }

    URL = `${URL}/${id}`
    return this._httpClient.delete(URL).pipe(timeout(_environment.timeOutAPI));
  }

  search(data: any): Observable<IBaseResponse | any>{
    let URL = this._apiURL + "/search";

    return this._httpClient.post(URL, data).pipe(timeout(_environment.timeOutAPI));
  }
}
