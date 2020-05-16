import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarakteristikiComponent } from './harakteristiki.component';

describe('HarakteristikiComponent', () => {
  let component: HarakteristikiComponent;
  let fixture: ComponentFixture<HarakteristikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarakteristikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarakteristikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
