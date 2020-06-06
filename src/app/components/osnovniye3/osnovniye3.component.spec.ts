import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Osnovniye3Component } from './osnovniye3.component';

describe('Osnovniye3Component', () => {
  let component: Osnovniye3Component;
  let fixture: ComponentFixture<Osnovniye3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Osnovniye3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Osnovniye3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
