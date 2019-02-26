import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalidadPageComponent } from './calidad-page.component';

describe('CalidadPageComponent', () => {
  let component: CalidadPageComponent;
  let fixture: ComponentFixture<CalidadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalidadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalidadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
