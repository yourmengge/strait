import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmmbzrglComponent } from './xmmbzrgl.component';

describe('XmmbzrglComponent', () => {
  let component: XmmbzrglComponent;
  let fixture: ComponentFixture<XmmbzrglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmmbzrglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmmbzrglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
