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
  totalRecords: number = 0;
  numberOfRows: number = 0;
  page: number = 1;

  bandits: Bandit[] = [];

  private _unsubscribe: Subscription[] = new Array<Subscription>();
  constructor(private _service: BanditService) {}

  ngOnInit() {
    this.initData();
  }

  initData(): void{
    const sub = this._service.search(this.searchModel).subscribe((response: IBaseResponse) => {
      if(response.success){
        this.bandits = response.data;
        this.totalRecords = response.totalRecords;
        this.numberOfRows = this.totalRecords / 5;
      }
    });
    this._unsubscribe.push(sub);
  }

  changePageNext(): void{
    this.page = this.page + 1;
    this.searchModel.page = this.searchModel.page + 1;
    this.initData();
  }

  changePagePrevious(): void{
    this.page = this.page - 1;
    this.searchModel.page = this.searchModel.page - 1;
    this.initData();
  }

  setSimilarity(event: any): void{
    this.searchModel.similarity = event.target.value;
    this.initData();
  }

  ngOnDestroy(): void {
    this._unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
