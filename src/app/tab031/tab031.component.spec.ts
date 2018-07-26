import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab031Component } from './tab031.component';

describe('Tab031Component', () => {
  let component: Tab031Component;
  let fixture: ComponentFixture<Tab031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
