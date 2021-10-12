import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel1Component } from './nivel1.component';

describe('Nivel1Component', () => {
  let component: Nivel1Component;
  let fixture: ComponentFixture<Nivel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nivel1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nivel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
