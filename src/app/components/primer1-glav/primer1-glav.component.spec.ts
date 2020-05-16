import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Primer1GlavComponent } from './primer1-glav.component';

describe('Primer1GlavComponent', () => {
  let component: Primer1GlavComponent;
  let fixture: ComponentFixture<Primer1GlavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Primer1GlavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Primer1GlavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
