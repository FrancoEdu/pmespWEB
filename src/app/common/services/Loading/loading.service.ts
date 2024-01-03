import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subject } from 'rxjs';
import { Loading } from '../../Models/Loading/Loading';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _subLoading = new Subject<Loading>();

  constructor(private _ngxSpinnerService: NgxSpinnerService) {}

  show(
    description: string | null = null,
    backgroundColor: string | null = null,
    color: string | null = null,
    size: string | null = null,
    type: string | null = null
  ): void {
    const loader = this.configLoader(
      description,
      backgroundColor,
      color,
      size,
      type
    );
    this._subLoading.next(loader);

    this._ngxSpinnerService.show();
  }

  getLoading(): Observable<Loading> {
    return this._subLoading.asObservable();
  }

  hide(): void {
    this._ngxSpinnerService.hide();
  }

  private configLoader(
    description: string | null = null,
    backgroundColor: string | null = null,
    color: string | null = null,
    size: string | null = null,
    type: string | null = null
  ): Loading {
    const loading: Loading = {
      Description: description ?? 'Carregando...',
      Color: color ?? '#fff',
      Size: size ?? 'medium',
      Type: type ?? 'Type',
    };
    return loading;
  }
}
