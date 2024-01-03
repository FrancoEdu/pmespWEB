import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliceRecordComponent } from './pages/police-record/police-record.component';
import {RouterModule, Routes} from "@angular/router";
import { PoliceRecordToolbarComponent } from './components/police-record-toolbar/police-record-toolbar.component';
import { PoliceRecordModalComponent } from './components/police-record-modal/police-record-modal.component';
import { PoliceRecordDetailsComponent } from './pages/police-record-details/police-record-details.component';
import { PoliceRecordDetailsToolbarComponent } from './components/police-record-details-toolbar/police-record-details-toolbar.component';
import {BanditService} from "./shared/service/bandit.service";
import {PaginatorModule} from "primeng/paginator";
import {CPFPipe} from "../../common/pipes/cpf.pipe";
import {CustomBdDatePipe} from "../../common/pipes/custom-bd-date.pipe";
import {ReactiveFormsModule} from "@angular/forms";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MunicipioService } from '../../common/services/IBGE/municipio.service';
import {MessageService} from "primeng/api";
import { ToastModule } from 'primeng/toast';
import {AppRoutingModule} from "../../app-routing.module";

const routes: Routes = [
  {
    path: '', component: PoliceRecordComponent, pathMatch: "full"
  },
  {
    path: ':id', component: PoliceRecordDetailsComponent
  }
]

@NgModule({
  declarations: [
    PoliceRecordComponent,
    PoliceRecordToolbarComponent,
    PoliceRecordModalComponent,
    PoliceRecordDetailsComponent,
    PoliceRecordDetailsToolbarComponent
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    CPFPipe,
    CustomBdDatePipe,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgxMaskDirective,
    NgxMaskPipe,
    ToastModule,
  ],
  providers:[
    BanditService,
    provideNgxMask(),
    MunicipioService,
    MessageService
  ]
})
export class PoliceRecordModule { }
