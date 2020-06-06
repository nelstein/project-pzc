import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Voprosi3Component } from './voprosi3.component';

describe('Voprosi3Component', () => {
  let component: Voprosi3Component;
  let fixture: ComponentFixture<Voprosi3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Voprosi3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Voprosi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
