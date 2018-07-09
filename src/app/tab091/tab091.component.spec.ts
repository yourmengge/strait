import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAB091Component } from './tab091.component';

describe('TAB091Component', () => {
  let component: TAB091Component;
  let fixture: ComponentFixture<TAB091Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAB091Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAB091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
