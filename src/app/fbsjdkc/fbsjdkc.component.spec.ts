import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbsjdkcComponent } from './fbsjdkc.component';

describe('FbsjdkcComponent', () => {
  let component: FbsjdkcComponent;
  let fixture: ComponentFixture<FbsjdkcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbsjdkcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbsjdkcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
