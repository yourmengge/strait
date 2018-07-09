import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChydpdComponent } from './chydpd.component';

describe('ChydpdComponent', () => {
  let component: ChydpdComponent;
  let fixture: ComponentFixture<ChydpdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChydpdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChydpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
