import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1Punto3Component } from './n1-punto3.component';

describe('N1Punto3Component', () => {
  let component: N1Punto3Component;
  let fixture: ComponentFixture<N1Punto3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N1Punto3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N1Punto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
