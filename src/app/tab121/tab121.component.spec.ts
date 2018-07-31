import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab121Component } from './tab121.component';

describe('Tab121Component', () => {
  let component: Tab121Component;
  let fixture: ComponentFixture<Tab121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
