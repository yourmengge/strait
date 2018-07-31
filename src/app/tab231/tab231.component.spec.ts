import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab231Component } from './tab231.component';

describe('Tab231Component', () => {
  let component: Tab231Component;
  let fixture: ComponentFixture<Tab231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
