import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer1',
  templateUrl: './primer1.component.html',
  styleUrls: ['./primer1.component.scss']
})
export class Primer1Component implements OnInit {
  value
  items = ['Introduction', 'Essay Job', 'Leesson woel'];
  constructor() { }

  onClick(val: number) {
    this.value = val;
    console.log(val);
  }

  ngOnInit() {
  }

}
