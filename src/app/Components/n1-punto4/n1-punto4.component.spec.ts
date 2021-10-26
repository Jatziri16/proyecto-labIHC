import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1Punto4Component } from './n1-punto4.component';

describe('N1Punto4Component', () => {
  let component: N1Punto4Component;
  let fixture: ComponentFixture<N1Punto4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N1Punto4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N1Punto4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
