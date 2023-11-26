import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelActividadMotoraPizarronComponent } from './panel-actividad-motora-pizarron.component';

describe('PanelActividadMotoraPizarronComponent', () => {
  let component: PanelActividadMotoraPizarronComponent;
  let fixture: ComponentFixture<PanelActividadMotoraPizarronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelActividadMotoraPizarronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelActividadMotoraPizarronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
