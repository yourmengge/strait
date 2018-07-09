import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAB021Component } from './tab021.component';

describe('TAB021Component', () => {
  let component: TAB021Component;
  let fixture: ComponentFixture<TAB021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAB021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAB021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
