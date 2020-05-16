import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremushestvaComponent } from './premushestva.component';

describe('PremushestvaComponent', () => {
  let component: PremushestvaComponent;
  let fixture: ComponentFixture<PremushestvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremushestvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremushestvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
