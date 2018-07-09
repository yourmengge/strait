import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAB052Component } from './tab052.component';

describe('TAB052Component', () => {
  let component: TAB052Component;
  let fixture: ComponentFixture<TAB052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAB052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAB052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
