import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAB012Component } from './tab012.component';

describe('TAB012Component', () => {
  let component: TAB012Component;
  let fixture: ComponentFixture<TAB012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAB012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAB012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
