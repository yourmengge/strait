import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab241Component } from './tab241.component';

describe('Tab241Component', () => {
  let component: Tab241Component;
  let fixture: ComponentFixture<Tab241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
