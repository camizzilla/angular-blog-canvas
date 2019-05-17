import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosaServeComponent } from './cosa-serve.component';

describe('CosaServeComponent', () => {
  let component: CosaServeComponent;
  let fixture: ComponentFixture<CosaServeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosaServeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosaServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
