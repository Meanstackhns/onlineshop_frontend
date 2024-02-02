import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderPageComponent } from './view-order-page.component';

describe('ViewOrderPageComponent', () => {
  let component: ViewOrderPageComponent;
  let fixture: ComponentFixture<ViewOrderPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewOrderPageComponent]
    });
    fixture = TestBed.createComponent(ViewOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
