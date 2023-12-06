import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaraVisualizadorComponent } from './camara-visualizador.component';

describe('CamaraVisualizadorComponent', () => {
  let component: CamaraVisualizadorComponent;
  let fixture: ComponentFixture<CamaraVisualizadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamaraVisualizadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaraVisualizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
