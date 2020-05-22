import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prakticheskaya3Component } from './prakticheskaya3.component';

describe('Prakticheskaya3Component', () => {
  let component: Prakticheskaya3Component;
  let fixture: ComponentFixture<Prakticheskaya3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prakticheskaya3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prakticheskaya3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
