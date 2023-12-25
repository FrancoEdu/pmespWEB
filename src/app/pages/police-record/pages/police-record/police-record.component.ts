import {Component, OnDestroy, OnInit} from '@angular/core';
import {BanditService} from "../../shared/service/bandit.service";
import {Bandit} from "../../shared/model/bandit";
import {IBaseResponse} from "../../../../common/Models/IBase/IBaseResponse";
import {Subscription} from "rxjs";

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-police-record',
  templateUrl: './police-record.component.html',
})
export class PoliceRecordComponent implements OnInit, OnDestroy{
  first = 0;
  rows = 5;

  bandits: Bandit[] = [];

  private _unsubscribe: Subscription[] = new Array<Subscription>();
  constructor(private _service: BanditService) {}

  ngOnInit() {
    this.loadBandits();
  }

  loadBandits(): void{
    const sub = this._service.getAll().subscribe((response: IBaseResponse) => {
      if(response.success){
        this.bandits = response.data;
      }
    });
    this._unsubscribe.push(sub);
  }

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }
  ngOnDestroy(): void {
    this._unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
