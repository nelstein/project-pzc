import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Voprosi1Component } from './voprosi1.component';

describe('Voprosi1Component', () => {
  let component: Voprosi1Component;
  let fixture: ComponentFixture<Voprosi1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Voprosi1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Voprosi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
