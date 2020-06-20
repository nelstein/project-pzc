import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-prakticheskaya1',
  templateUrl: './prakticheskaya1.component.html',
  styleUrls: ['./prakticheskaya1.component.scss']
})
export class Prakticheskaya1Component implements OnInit {
  ts = 2856
  tn = 10
  Ae = 100
  En = 0.1
  l1 = 0.25
  l2 = 1.5
  lx = 0.6
  c1 = 3.743
  c2 = 1.4388
  c3 = 1.2864
  c = 3
  h = 6.626
  d = 5.6687
  n = 0.68;
  k = 0.12
  σ = 0.1
  dn
  m;
  nf;

  formatLabel(value: number) {
    return value.toString() + '10e-6';
  }

  onTchange(event) {
    this.tn = event.value;

    this.updateValues();
  }

  eqn1
  eqn2
  eqn3
  eqn4
  eqn5
  eqn6



  constructor() {
    this.eqn1 = '\\frac{T_{н}A_{э}}{hc}\∫_{\λ_{1}}^\{λ_{2}}\{E_{пор}(λ)η(λ)λdλ}';
    this.eqn2 = '\\frac{C_{1}}{C_{3}\T^5\λ^5 [exp(\C_{2}/{λT})-1]}';
    this.eqn3 = '\\frac{E_{пор}}{683\∫_0^∞M_{λ,отн}^0 (λ,T) V(λ)dλ}';
    this.eqn4 = '\\frac{Е_{пор}T_{н}А_{э} }{683hcК_{гл}σТ_{цв}^4}∫_{λ_{1}}^{λ_{2}}M_{λ,отн}^0 (λ,T)η(λ)λdλ';
    this.eqn6 = `\\frac{${this.c1}*10^{-16}}{${this.c3}*10^{-15}* ${this.ts}^5 * (${this.lx} * 10^{-6})^5 [exp(${this.c2}*10^2/{${this.lx} * 10^{-6}*${this.ts}})-1]}`;
    this.m = (this.c1 * Math.pow(10, -16)) / (this.c3 * Math.pow(10, -15) * Math.pow(this.tn, 5) * Math.pow(this.lx * Math.pow(10, -6), 5) * Math.expm1((this.c2 * 100) / (this.lx * Math.pow(10, -6) * this.tn)));
    this.updateValues();
  }


  updateValues() {

    this.dn = 683 * this.h * 10e-34 * this.c * 10e-8 * this.k * this.σ * Math.pow(this.ts, 4)
    this.eqn5 = `\\frac{10*${this.tn}*10^{-12}}{1.084 * 10^{-24}}∫_{${this.l1}*10^{-6}}^{${this.l2}*10^{-6}}M_{λ,отн}^0 (λ,T)*${this.n}*${this.lx} * 10^{-6}dλ`;
    this.eqn6 = `\\frac{${this.c1}*10^{-16}}{${this.c3}*10^{-15}* ${this.ts}^5 * (${this.lx} * 10^{-6})^5 [exp(${this.c2}*10^2/({${this.lx} * 10^{-6}*${this.ts}}))-1]}`;
    this.nf = ((Math.pow(10 * this.tn, -12))/this.dn) * this.m
    this.m = (this.c1 * Math.pow(10, -16)) / (this.c3 * Math.pow(10, -15) * Math.pow(this.tn, 5) * Math.pow(this.lx * Math.pow(10, -6), 5) * Math.expm1((this.c2 * 100) / (this.lx * Math.pow(10, -6) * this.tn)));
  }

  onLchange(event) {
    this.lx = event.target.value;
    this.updateValues();
  }

  onL1change(event) {
    this.l1 = event.target.value;
    this.updateValues();
  }
  onL2change(event) {
    this.l2 = event.target.value;
    this.updateValues();
  }

  onNchange(event) {
    this.n = event.target.value;
    this.updateValues();

  }

  ngOnInit() {
  }

}
