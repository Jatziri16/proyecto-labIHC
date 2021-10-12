import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel2Component } from './nivel2.component';

describe('Nivel2Component', () => {
  let component: Nivel2Component;
  let fixture: ComponentFixture<Nivel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nivel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nivel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
