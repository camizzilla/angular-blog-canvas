import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreazionePersonaggioComponent } from './creazione-personaggio.component';

describe('CreazionePersonaggioComponent', () => {
  let component: CreazionePersonaggioComponent;
  let fixture: ComponentFixture<CreazionePersonaggioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreazionePersonaggioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreazionePersonaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
