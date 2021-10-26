import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1Punto8Component } from './n1-punto8.component';

describe('N1Punto8Component', () => {
  let component: N1Punto8Component;
  let fixture: ComponentFixture<N1Punto8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N1Punto8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N1Punto8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
