import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab011Component } from './tab011.component';

describe('Tab011Component', () => {
  let component: Tab011Component;
  let fixture: ComponentFixture<Tab011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
