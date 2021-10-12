import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nivel3Component } from './nivel3.component';

describe('Nivel3Component', () => {
  let component: Nivel3Component;
  let fixture: ComponentFixture<Nivel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nivel3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nivel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
