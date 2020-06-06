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
import { Prilozhenia1Component } from './prilozhenia1/prilozhenia1.component';
import { Grafika1Component } from './grafika1/grafika1.component';
import { MathjaxComponent } from './mathjax/mathjax.component';
import { OsnovniyeComponent } from './osnovniye/osnovniye.component';
import { Osnovniye3Component } from './osnovniye3/osnovniye3.component';
import { Voprosi1Component } from './voprosi1/voprosi1.component';
import { Voprosi2Component } from './voprosi2/voprosi2.component';
import { Voprosi3Component } from './voprosi3/voprosi3.component';



@NgModule({
  declarations: [DostoinstvaComponent, PremushestvaComponent, HarakteristikiComponent, MnogabrazieComponent, ZakluchenieComponent, PrintsipiPzcComponent, Prakticheskaya1Component, 
    Prakticheskaya2Component, Prakticheskaya3Component, Prilozhenia1Component, Grafika1Component, 
    MathjaxComponent, OsnovniyeComponent, Osnovniye3Component, Voprosi1Component, Voprosi2Component, Voprosi3Component],
  imports: [

    CommonModule,
    MaterialModule
  ],
  exports: [
    DostoinstvaComponent, OsnovniyeComponent, Osnovniye3Component,
    PremushestvaComponent, MathjaxComponent, Voprosi1Component, Voprosi2Component, Voprosi3Component,
    HarakteristikiComponent, Prakticheskaya1Component, Prilozhenia1Component, Grafika1Component,
    MnogabrazieComponent, ZakluchenieComponent, PrintsipiPzcComponent, Prakticheskaya2Component, Prakticheskaya3Component,
  ]
})
export class ComponentsModule { }
