import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prakticheskaya2',
  templateUrl: './prakticheskaya2.component.html',
  styleUrls: ['./prakticheskaya2.component.scss']
})
export class Prakticheskaya2Component implements OnInit {
  l1 = 0.75
  dd = 1
  dob = 10
  pd = 0.9
  lx = 4.8
  ly = 3.6
  n = 0.65
  c = 3
  h = 6.626
  d = 5.6687
  tfn = 2700
  Efn = 100
  pfn = 0.1
  l = 5
  pl = 30
  wl = 5
  wp = 5

  eqn1
  eqn2
  eqn3
  eqn4
  eqn5

  constructor() { 
    this.eqn1 = '\\frac{Р_{л} ρ_{д}D_{об}^2 D_д^2 а_{х} a_{у}λ_{л} η(λ_{л})Т_{н}}{4πhcl^4 ω^2 D_{д}^{\'2}}'
    this.eqn2 = '\\n';
    this.eqn3 = '\\frac{Р_{л} ρ_{фн}D_{об}^2 а_{х} a_{у}λ_{л} η(λ_{л})Т_{н}}{πhc l^2 d_{фпзс}^2}'
    this.eqn4 = '\\frac{ρ_{д} ω_{пр}^2 D_{об}^2 D_д^2 а_{х} a_{у}λ_{л} η(λ_{л})Т_{н}^∞}{πhc l^2 d_{фпзс}^2K_{гл}σТ_{фн}^4}∫_0^∞M_{λ,отн}^0 (λ,T)η(λ)λdλ'
    // this.eqn5 = '\\20lg\frac{\Delta n_{c}}{sqrt{}}'
  }

  

  ngOnInit() {
  }

}
