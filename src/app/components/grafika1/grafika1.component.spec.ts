import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafika1Component } from './grafika1.component';

describe('Grafika1Component', () => {
  let component: Grafika1Component;
  let fixture: ComponentFixture<Grafika1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grafika1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grafika1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
