import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAB161Component } from './tab161.component';

describe('TAB161Component', () => {
  let component: TAB161Component;
  let fixture: ComponentFixture<TAB161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAB161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAB161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
