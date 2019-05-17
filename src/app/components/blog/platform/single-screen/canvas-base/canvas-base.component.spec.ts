import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBaseComponent } from './canvas-base.component';

describe('CanvasBaseComponent', () => {
  let component: CanvasBaseComponent;
  let fixture: ComponentFixture<CanvasBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
