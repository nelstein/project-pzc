import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prakticheskaya1Component } from './prakticheskaya1.component';

describe('Prakticheskaya1Component', () => {
  let component: Prakticheskaya1Component;
  let fixture: ComponentFixture<Prakticheskaya1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prakticheskaya1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prakticheskaya1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
