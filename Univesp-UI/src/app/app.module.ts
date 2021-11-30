import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MatMenuModule } from '@angular/material/menu';

import { ScreensModule } from './screens/screens.module';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScreensModule,
    ComponentsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatMenuModule,
    ScreensModule
  ]
})
export class AppModule { }
