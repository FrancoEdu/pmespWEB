import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class NavbarModule { }
