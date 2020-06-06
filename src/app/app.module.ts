import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { Primer1Component } from './primer1/primer1.component';
import { Primer1GlavComponent } from './components/primer1-glav/primer1-glav.component';
import { ComponentsModule } from './components/components.module';
import { GlavniyComponent } from './glavniy/glavniy.component';
import { Primer2Component } from './primer2/primer2.component';
import { Primer3Component } from './primer3/primer3.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Primer1Component,
    Primer1GlavComponent,
    GlavniyComponent,
    Primer2Component,
    Primer3Component,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,

  ],
  exports: [
    MaterialModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
