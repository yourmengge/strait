import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab201Component } from './tab201.component';

describe('Tab201Component', () => {
  let component: Tab201Component;
  let fixture: ComponentFixture<Tab201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
