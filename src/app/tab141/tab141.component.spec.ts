import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab141Component } from './tab141.component';

describe('Tab141Component', () => {
  let component: Tab141Component;
  let fixture: ComponentFixture<Tab141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
