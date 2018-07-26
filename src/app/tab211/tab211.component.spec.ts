import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab211Component } from './tab211.component';

describe('Tab211Component', () => {
  let component: Tab211Component;
  let fixture: ComponentFixture<Tab211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
