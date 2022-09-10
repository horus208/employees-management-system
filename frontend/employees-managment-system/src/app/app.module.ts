import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {EmployeeCardComponent} from './employee-card/employee-card.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import {HttpClientModule} from "@angular/common/http";
import { AddModalComponent } from './add-modal/add-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EmployeeCardComponent,
    DeleteModalComponent,
    EditModalComponent,
    AddModalComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
