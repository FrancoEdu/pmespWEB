import {Component, OnDestroy, OnInit} from '@angular/core';
import {Bandit} from "../../shared/model/bandit";
import {ActivatedRoute} from "@angular/router";
import {BanditService} from "../../shared/service/bandit.service";
import {IBaseResponse} from "../../../../common/Models/IBase/IBaseResponse";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-police-record-details',
  templateUrl: './police-record-details.component.html'
})
export class PoliceRecordDetailsComponent implements OnInit, OnDestroy{
  entity?: Bandit
  id: any;

  private _unsubscribe: Subscription[] = new Array<Subscription>()
  constructor(
    private _router: ActivatedRoute,
    private readonly _service: BanditService
  ) {}

  ngOnInit(): void {
    this.id = this.chargeData();
    const sub = this._service.getById(this.id).subscribe((res: IBaseResponse) => {
      if(res.success){
        this.entity = res.data
      }
    });
    this._unsubscribe.push(sub);
  }

  chargeData(): string | any{
    const param : string | null = this._router.snapshot.paramMap.get("id")
    return param
  }

  ngOnDestroy(): void{
    this._unsubscribe.forEach((sb) => sb.unsubscribe())
  }
}
