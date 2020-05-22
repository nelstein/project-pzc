import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintsipiPzcComponent } from './printsipi-pzc.component';

describe('PrintsipiPzcComponent', () => {
  let component: PrintsipiPzcComponent;
  let fixture: ComponentFixture<PrintsipiPzcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintsipiPzcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintsipiPzcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
