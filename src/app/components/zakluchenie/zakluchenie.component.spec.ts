import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakluchenieComponent } from './zakluchenie.component';

describe('ZakluchenieComponent', () => {
  let component: ZakluchenieComponent;
  let fixture: ComponentFixture<ZakluchenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZakluchenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakluchenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
