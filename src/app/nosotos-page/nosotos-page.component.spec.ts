import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotosPageComponent } from './nosotos-page.component';

describe('NosotosPageComponent', () => {
  let component: NosotosPageComponent;
  let fixture: ComponentFixture<NosotosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
