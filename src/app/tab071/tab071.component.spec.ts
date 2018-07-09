import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAB071Component } from './tab071.component';

describe('TAB071Component', () => {
  let component: TAB071Component;
  let fixture: ComponentFixture<TAB071Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAB071Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAB071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
