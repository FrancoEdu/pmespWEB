import {Injectable, Injector} from '@angular/core';
import {IBaseService} from "../../../../common/services/IBase/ibase.service";
import {Bandit} from "../model/bandit";
import {_environment} from "../../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class BanditService extends IBaseService<Bandit>{
  private _pathResource = 'bandit';

  constructor(injector: Injector) {
    super(injector);
    this._apiURL = `${_environment.apiURL}/${this._pathResource}`;
  }
}
