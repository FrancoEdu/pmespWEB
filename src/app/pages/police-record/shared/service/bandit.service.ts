import {Injectable, Injector} from '@angular/core';
import {IBaseService} from "../../../../common/services/IBase/ibase.service";
import {Bandit} from "../model/bandit";

@Injectable({
  providedIn: 'root'
})
export class BanditService extends IBaseService<Bandit>{
  constructor(injector: Injector) {
    super("bandit", injector);
  }
}
