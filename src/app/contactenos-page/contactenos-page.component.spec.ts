import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactenosPageComponent } from './contactenos-page.component';

describe('ContactenosPageComponent', () => {
  let component: ContactenosPageComponent;
  let fixture: ComponentFixture<ContactenosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactenosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactenosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
