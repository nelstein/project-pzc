import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prilozhenia1Component } from './prilozhenia1.component';

describe('Prilozhenia1Component', () => {
  let component: Prilozhenia1Component;
  let fixture: ComponentFixture<Prilozhenia1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prilozhenia1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prilozhenia1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
