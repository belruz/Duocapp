import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BienvenidaAlumPage } from './bienvenida-alum.page';

describe('BienvenidaAlumPage', () => {
  let component: BienvenidaAlumPage;
  let fixture: ComponentFixture<BienvenidaAlumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BienvenidaAlumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
