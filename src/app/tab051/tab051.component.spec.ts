import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAB051Component } from './tab051.component';

describe('TAB051Component', () => {
  let component: TAB051Component;
  let fixture: ComponentFixture<TAB051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAB051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAB051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
