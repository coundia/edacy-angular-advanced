import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { PluralizePipe } from './pipes/pluralize.pipe';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    PluralizePipe,
    RelativeTimePipe,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
