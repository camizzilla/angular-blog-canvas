import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InizializzazioneComponent } from './inizializzazione.component';

describe('InizializzazioneComponent', () => {
  let component: InizializzazioneComponent;
  let fixture: ComponentFixture<InizializzazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InizializzazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InizializzazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
