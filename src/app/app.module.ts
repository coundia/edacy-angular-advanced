import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { PluralizePipe } from './pipes/pluralize.pipe';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ValidatorsComponent } from './validators/validators.component';
import { FormTemplateComponent } from './forms/form-template/form-template.component';
import { FormReativeComponent } from './forms/form-reative/form-reative.component';


@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    PluralizePipe,
    RelativeTimePipe,
    HeaderComponent,
    ValidatorsComponent,
    FormTemplateComponent,
    FormReativeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
