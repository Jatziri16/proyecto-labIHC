import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N1Punto6Component } from './n1-punto6.component';

describe('N1Punto6Component', () => {
  let component: N1Punto6Component;
  let fixture: ComponentFixture<N1Punto6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N1Punto6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N1Punto6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
