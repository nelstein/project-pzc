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
  lx = 600
  c1 = 3.743
  c2 = 1.4388
  c3 = 1.2864
  c = 3
  h = 6.626
  d = 5.6687


  m = ((196 * this.tn) / 20);

  formatLabel(value: number) {
    return value.toString() + '10e-6';
  }

  onTchange(event) {
    this.tn = event.value;
    this.m = ((196 * event.value) / 20);
    console.log(event);
  }

  eqn1
  eqn2
  eqn3
  eqn4
  

  constructor() {
    this.eqn1 = '\\frac{T_{н}A_{э}}{hc}\∫_{\λ_{1}}^\{λ_{2}}\{E_{пор}(λ)η(λ)λdλ}';
    this.eqn2 = '\\frac{C_{1}}{C_{3}\T^5\λ^5 [exp(\C_{2}/{λT})-1]}';
    this.eqn3 = '\\frac{E_{пор}}{683\∫_0^∞M_{λ,отн}^0 (λ,T) V(λ)dλ}';
    this.eqn4 = '\\frac{Е_{пор}T_{н}А_{э}}{683hcК_{гл}σТ_{цв}^4}∫_0^∞M_{λ,отн}^0 (λ,T)η(λ)λdλ';
  }

  ngOnInit() {
  }

}
