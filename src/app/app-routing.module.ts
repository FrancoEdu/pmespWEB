import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "policeRecord",
    pathMatch: 'full',
  },
  {
    path:'policeRecord', loadChildren: () => import('./pages/police-record/police-record.module').then((m) => m.PoliceRecordModule)
  },
  {
    path:'transcriptions', loadChildren: () => import('./pages/transcription/transcription.module').then((m) => m.TranscriptionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
