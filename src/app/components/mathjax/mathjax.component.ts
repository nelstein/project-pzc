import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'mathjax',
  templateUrl: './mathjax.component.html',
  styleUrls: ['./mathjax.component.scss']
})
export class MathjaxComponent implements OnInit {

  @Input() content :string;

  constructor(public cs: ConfigService) { }
  options: KatexOptions = {
    displayMode: true,
  
  };

  ngOnInit() {

  }

  

}
