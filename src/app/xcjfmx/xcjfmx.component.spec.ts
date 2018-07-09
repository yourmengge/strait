import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XcjfmxComponent } from './xcjfmx.component';

describe('XcjfmxComponent', () => {
  let component: XcjfmxComponent;
  let fixture: ComponentFixture<XcjfmxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XcjfmxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XcjfmxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
