import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1Punto5Component } from './n1-punto5.component';

describe('N1Punto5Component', () => {
  let component: N1Punto5Component;
  let fixture: ComponentFixture<N1Punto5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N1Punto5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N1Punto5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
