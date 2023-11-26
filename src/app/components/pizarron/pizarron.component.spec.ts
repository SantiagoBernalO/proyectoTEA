import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizarronComponent } from './pizarron.component';

describe('PizarronComponent', () => {
  let component: PizarronComponent;
  let fixture: ComponentFixture<PizarronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizarronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizarronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
