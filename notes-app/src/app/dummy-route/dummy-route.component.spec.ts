import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyRouteComponent } from './dummy-route.component';

describe('DummyRouteComponent', () => {
  let component: DummyRouteComponent;
  let fixture: ComponentFixture<DummyRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
