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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
