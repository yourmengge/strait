import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAB151Component } from './tab151.component';

describe('TAB151Component', () => {
  let component: TAB151Component;
  let fixture: ComponentFixture<TAB151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAB151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAB151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
