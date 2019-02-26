import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerGenericComponent } from './banner-generic.component';

describe('BannerGenericComponent', () => {
  let component: BannerGenericComponent;
  let fixture: ComponentFixture<BannerGenericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerGenericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
