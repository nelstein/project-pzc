import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prakticheskaya3',
  templateUrl: './prakticheskaya3.component.html',
  styleUrls: ['./prakticheskaya3.component.scss']
})
export class Prakticheskaya3Component implements OnInit {
  dxp = 5
  vxp = 0
  lx = 4.8
  m = 796
  vxn = 0

  eqn1
  eqn2
  eqn3
  eqn4

  constructor() { 
    this.eqn1 = '\\frac1{d_{xп}}'
    this.eqn2 = '\\frac{M}{2l_{x}}'
    this.eqn3 = `\\frac1{${this.dxp}}`
    this.eqn4 = `\\frac{${this.m}}{2 * ${this.lx}}`
    this.vxn = Math.round(this.m/(2*this.lx)) 
    this.vxp = 1/this.dxp;
  }

  onLchange(event){
    this.dxp = event.value;
    this.eqn3 = `\\frac1{${this.dxp}}`
    this.eqn4 = `\\frac{${this.m}}{2 * ${this.lx}}`
    this.vxn = Math.round(this.m/(2*this.lx))
    this.vxp = 1/this.dxp;
  }

  ngOnInit() {
  }

}
