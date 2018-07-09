import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAB181Component } from './tab181.component';

describe('TAB181Component', () => {
  let component: TAB181Component;
  let fixture: ComponentFixture<TAB181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAB181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAB181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
