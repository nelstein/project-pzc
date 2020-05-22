import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlavniyComponent } from './glavniy.component';

describe('GlavniyComponent', () => {
  let component: GlavniyComponent;
  let fixture: ComponentFixture<GlavniyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlavniyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlavniyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
