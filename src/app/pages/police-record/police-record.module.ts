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
import { BanditTattoosComponent } from './components/bandit-tattoos/bandit-tattoos.component';
import { BanditRgsComponent } from './components/bandit-rgs/bandit-rgs.component';
import { BanditAddressesComponent } from './components/bandit-addresses/bandit-addresses.component';
import { BanditPhonesComponent } from './components/bandit-phones/bandit-phones.component';
import { BanditFamilyComponent } from './components/bandit-family/bandit-family.component';
import { BanditGunsComponent } from './components/bandit-guns/bandit-guns.component';
import { BanditChildsComponent } from './components/bandit-childs/bandit-childs.component';
import { BanditMotorsComponent } from './components/bandit-motors/bandit-motors.component';
import { BanditJobAssociateComponent } from './components/bandit-job-associate/bandit-job-associate.component';
import { BanditJobLocationsComponent } from './components/bandit-job-locations/bandit-job-locations.component';
import { BanditMomentsComponent } from './components/bandit-moments/bandit-moments.component';
import { BanditFriendsComponent } from './components/bandit-friends/bandit-friends.component';
import { BanditSocialMediaComponent } from './components/bandit-social-media/bandit-social-media.component';
import { BanditPessoalSignalsComponent } from './components/bandit-pessoal-signals/bandit-pessoal-signals.component';
import { BanditPhotosComponent } from './components/bandit-photos/bandit-photos.component';

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
    PoliceRecordDetailsToolbarComponent,
    BanditTattoosComponent,
    BanditRgsComponent,
    BanditAddressesComponent,
    BanditPhonesComponent,
    BanditFamilyComponent,
    BanditGunsComponent,
    BanditChildsComponent,
    BanditMotorsComponent,
    BanditJobAssociateComponent,
    BanditJobLocationsComponent,
    BanditMomentsComponent,
    BanditFriendsComponent,
    BanditSocialMediaComponent,
    BanditPessoalSignalsComponent,
    BanditPhotosComponent
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
