import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DostoinstvaComponent } from './dostoinstva/dostoinstva.component';
import { PremushestvaComponent } from './premushestva/premushestva.component';
import { HarakteristikiComponent } from './harakteristiki/harakteristiki.component';
import { MnogabrazieComponent } from './mnogabrazie/mnogabrazie.component';
import { ZakluchenieComponent } from './zakluchenie/zakluchenie.component';




@NgModule({
  declarations: [DostoinstvaComponent, PremushestvaComponent, HarakteristikiComponent, MnogabrazieComponent, ZakluchenieComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    DostoinstvaComponent,
    PremushestvaComponent,
    HarakteristikiComponent,
    MnogabrazieComponent, ZakluchenieComponent
  ]
})
export class ComponentsModule { }
