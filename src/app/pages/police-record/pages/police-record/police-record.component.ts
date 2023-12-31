import {Component, OnDestroy, OnInit} from '@angular/core';
import {BanditService} from "../../shared/service/bandit.service";
import {Bandit} from "../../shared/model/bandit";
import {IBaseResponse} from "../../../../common/Models/IBase/IBaseResponse";
import {Subscription} from "rxjs";
import {Search} from "../../../../common/Models/Search/Search";
import {MessageService} from "primeng/api";
import {Loading} from "../../../../common/Models/Loading/Loading";

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

  possibleDeleteBandit!: Bandit;

  banditDetail?: Bandit;

  private _unsubscribe: Subscription[] = new Array<Subscription>();
  constructor(
    private _service: BanditService,
    private readonly _messageService: MessageService
  ) {}

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

  setDetailsBandit(id: string): void{
    const sub = this._service.getById(id).subscribe((res:IBaseResponse) => {
      if(res.success){
        this.banditDetail = res.data;
      }
    });
    this._unsubscribe.push(sub);
  }

  delete(id: string): void {
    const sub = this._service.delete(id).subscribe((res:IBaseResponse) => {
      if(res.success){
        this._messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: `${res.message}`
        });
        this.initData();
      }
    }, (error: Error) => {
      this._messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: `${error.message}`
      });
    });
  }

  setPossibleDeleteBandit(bandit: Bandit): void{
    this.possibleDeleteBandit = bandit;
  }

  ngOnDestroy(): void {
    this._unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
