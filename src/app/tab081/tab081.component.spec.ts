import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAB081Component } from './tab081.component';

describe('TAB081Component', () => {
  let component: TAB081Component;
  let fixture: ComponentFixture<TAB081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAB081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAB081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
