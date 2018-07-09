import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwjlybComponent } from './swjlyb.component';

describe('SwjlybComponent', () => {
  let component: SwjlybComponent;
  let fixture: ComponentFixture<SwjlybComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwjlybComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwjlybComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
