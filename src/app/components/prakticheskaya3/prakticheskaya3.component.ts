import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prakticheskaya3',
  templateUrl: './prakticheskaya3.component.html',
  styleUrls: ['./prakticheskaya3.component.scss']
})
export class Prakticheskaya3Component implements OnInit {
  dxp = 5
  vxp = 1/this.dxp
  lx = 4.8
  m = 796
  vxn = Math.round(this.m/(2*this.lx)) 

  eqn1
  eqn2

  constructor() { 
    this.eqn1 = '\\frac1{d_{xп}}'
    this.eqn2 = '\\frac{M}{2l_{x}}'
  }

  ngOnInit() {
  }

}
