import {Component, OnDestroy, OnInit} from '@angular/core';
import {BanditService} from "../../shared/service/bandit.service";
import {Bandit} from "../../shared/model/bandit";
import {IBaseResponse} from "../../../../common/Models/IBase/IBaseResponse";
import {Subscription} from "rxjs";
import {Search} from "../../../../common/Models/Search/Search";

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
  searchModel: Search = new Search();
  first = this.searchModel.page;
  rows = this.searchModel.quantityOnDisplay;
  totalRecords: number = 0;

  bandits: Bandit[] = [];

  private _unsubscribe: Subscription[] = new Array<Subscription>();
  constructor(private _service: BanditService) {}

  ngOnInit() {
    this.search();
    this.totalRecordMethod();
  }

  totalRecordMethod(): void{
    const number = this._service.getAll().subscribe((res:IBaseResponse) => {
      if(res.success){
        this.totalRecords = res.totalRecord;
      }
    });
  }

  search(): void{
    const sub = this._service.search(this.searchModel).subscribe((response: IBaseResponse) => {
      if(response.success){
        this.bandits = response.data;
      }
    });
    this._unsubscribe.push(sub);
  }

  setSimilarity(event: any): void{
    this.searchModel.similarity = event.target.value;
    this.search();
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.searchModel.page = this.first;
    this.searchModel.quantityOnDisplay = this.rows;
    this.search();
  }

  ngOnDestroy(): void {
    this._unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
