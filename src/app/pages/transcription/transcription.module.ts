import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranscriptionsComponent } from './pages/transcriptions/transcriptions.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '', component: TranscriptionsComponent, pathMatch: "full"
  }
]

@NgModule({
  declarations: [
    TranscriptionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TranscriptionModule { }
