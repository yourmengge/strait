import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab061Component } from './tab061.component';

describe('Tab061Component', () => {
  let component: Tab061Component;
  let fixture: ComponentFixture<Tab061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
