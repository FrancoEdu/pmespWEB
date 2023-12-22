import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliceRecordComponent } from './pages/police-record/police-record.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '', component: PoliceRecordComponent, pathMatch: "full"
  }
]

@NgModule({
  declarations: [
    PoliceRecordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PoliceRecordModule { }
