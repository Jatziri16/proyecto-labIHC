import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1Punto1Component } from './n1-punto1.component';

describe('N1Punto1Component', () => {
  let component: N1Punto1Component;
  let fixture: ComponentFixture<N1Punto1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N1Punto1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N1Punto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
