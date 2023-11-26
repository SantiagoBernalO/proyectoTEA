import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarActividadComponent } from './gestionar-actividad.component';

describe('GestionarActividadComponent', () => {
  let component: GestionarActividadComponent;
  let fixture: ComponentFixture<GestionarActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
