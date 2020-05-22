import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DostoinstvaComponent } from './dostoinstva/dostoinstva.component';
import { PremushestvaComponent } from './premushestva/premushestva.component';
import { HarakteristikiComponent } from './harakteristiki/harakteristiki.component';
import { MnogabrazieComponent } from './mnogabrazie/mnogabrazie.component';
import { ZakluchenieComponent } from './zakluchenie/zakluchenie.component';
import { PrintsipiPzcComponent } from './printsipi-pzc/printsipi-pzc.component';
import { Prakticheskaya1Component } from './prakticheskaya1/prakticheskaya1.component';
import { MaterialModule } from '../material/material.module';
import { Prakticheskaya2Component } from './prakticheskaya2/prakticheskaya2.component';
import { Prakticheskaya3Component } from './prakticheskaya3/prakticheskaya3.component';



@NgModule({
  declarations: [DostoinstvaComponent, PremushestvaComponent, HarakteristikiComponent, MnogabrazieComponent, ZakluchenieComponent, PrintsipiPzcComponent, Prakticheskaya1Component, Prakticheskaya2Component, Prakticheskaya3Component],
  imports: [

    CommonModule,
    MaterialModule
  ],
  exports: [
    DostoinstvaComponent,
    PremushestvaComponent,
    HarakteristikiComponent, Prakticheskaya1Component,
    MnogabrazieComponent, ZakluchenieComponent, PrintsipiPzcComponent, Prakticheskaya2Component, Prakticheskaya3Component,
  ]
})
export class ComponentsModule { }
