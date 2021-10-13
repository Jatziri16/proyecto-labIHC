import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1Punto2Component } from './n1-punto2.component';

describe('N1Punto2Component', () => {
  let component: N1Punto2Component;
  let fixture: ComponentFixture<N1Punto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N1Punto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N1Punto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
