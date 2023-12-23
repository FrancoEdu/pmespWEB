import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliceRecordComponent } from './pages/police-record/police-record.component';
import {RouterModule, Routes} from "@angular/router";
import { PoliceRecordToolbarComponent } from './components/police-record-toolbar/police-record-toolbar.component';
import { PoliceRecordModalComponent } from './components/police-record-modal/police-record-modal.component';

const routes: Routes = [
  {
    path: '', component: PoliceRecordComponent, pathMatch: "full"
  }
]

@NgModule({
  declarations: [
    PoliceRecordComponent,
    PoliceRecordToolbarComponent,
    PoliceRecordModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PoliceRecordModule { }
