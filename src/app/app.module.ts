import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NavbarModule} from "./common/components/navbar/navbar.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import { PaginatorModule } from 'primeng/paginator';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import {NgxSpinnerModule} from "ngx-spinner";

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarModule,
    NgbModule,
    PaginatorModule,
    NgxMaskDirective,
    NgxMaskPipe,
    NgxSpinnerModule
  ],
  providers: [
    provideEnvironmentNgxMask(maskConfig),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
