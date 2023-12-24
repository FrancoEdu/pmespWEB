import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliceRecordComponent } from './pages/police-record/police-record.component';
import {RouterModule, Routes} from "@angular/router";
import { PoliceRecordToolbarComponent } from './components/police-record-toolbar/police-record-toolbar.component';
import { PoliceRecordModalComponent } from './components/police-record-modal/police-record-modal.component';
import { PoliceRecordDetailsComponent } from './pages/police-record-details/police-record-details.component';
import { PoliceRecordDetailsToolbarComponent } from './components/police-record-details-toolbar/police-record-details-toolbar.component';

const routes: Routes = [
  {
    path: '', component: PoliceRecordComponent, pathMatch: "full"
  },
  {
    path: ':id/details', component: PoliceRecordDetailsComponent
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
    RouterModule.forChild(routes)
  ]
})
export class PoliceRecordModule { }
