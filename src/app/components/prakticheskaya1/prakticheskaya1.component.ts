import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prakticheskaya1',
  templateUrl: './prakticheskaya1.component.html',
  styleUrls: ['./prakticheskaya1.component.scss']
})
export class Prakticheskaya1Component implements OnInit {
  ts = 2856
  tn = 20
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
  

  formatLabel(value: number) {
      return value.toString() + '10e-6';
  }

  constructor() { }

  ngOnInit() {
  }

}
