import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DostoinstvaComponent } from './dostoinstva.component';

describe('DostoinstvaComponent', () => {
  let component: DostoinstvaComponent;
  let fixture: ComponentFixture<DostoinstvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DostoinstvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DostoinstvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
