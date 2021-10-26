import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1Punto7Component } from './n1-punto7.component';

describe('N1Punto7Component', () => {
  let component: N1Punto7Component;
  let fixture: ComponentFixture<N1Punto7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N1Punto7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N1Punto7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
