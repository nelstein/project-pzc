import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prakticheskaya2Component } from './prakticheskaya2.component';

describe('Prakticheskaya2Component', () => {
  let component: Prakticheskaya2Component;
  let fixture: ComponentFixture<Prakticheskaya2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prakticheskaya2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prakticheskaya2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
