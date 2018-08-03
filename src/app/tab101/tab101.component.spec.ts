import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab101Component } from './tab101.component';

describe('Tab101Component', () => {
  let component: Tab101Component;
  let fixture: ComponentFixture<Tab101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
