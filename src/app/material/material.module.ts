import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatSliderModule
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatSliderModule
  ]
})

export class MaterialModule { }
