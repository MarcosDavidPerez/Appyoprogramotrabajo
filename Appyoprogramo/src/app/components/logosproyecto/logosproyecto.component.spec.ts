import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosproyectoComponent } from './logosproyecto.component';

describe('LogosproyectoComponent', () => {
  let component: LogosproyectoComponent;
  let fixture: ComponentFixture<LogosproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogosproyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
