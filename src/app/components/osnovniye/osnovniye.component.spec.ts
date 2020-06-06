import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsnovniyeComponent } from './osnovniye.component';

describe('OsnovniyeComponent', () => {
  let component: OsnovniyeComponent;
  let fixture: ComponentFixture<OsnovniyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsnovniyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsnovniyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
