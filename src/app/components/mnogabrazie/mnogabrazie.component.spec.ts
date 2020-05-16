import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnogabrazieComponent } from './mnogabrazie.component';

describe('MnogabrazieComponent', () => {
  let component: MnogabrazieComponent;
  let fixture: ComponentFixture<MnogabrazieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnogabrazieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnogabrazieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
