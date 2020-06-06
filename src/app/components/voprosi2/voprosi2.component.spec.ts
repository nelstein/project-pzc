import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Voprosi2Component } from './voprosi2.component';

describe('Voprosi2Component', () => {
  let component: Voprosi2Component;
  let fixture: ComponentFixture<Voprosi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Voprosi2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Voprosi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
