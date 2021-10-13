import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyLv2CompComponent } from './dummy-lv2-comp.component';

describe('DummyLv2CompComponent', () => {
  let component: DummyLv2CompComponent;
  let fixture: ComponentFixture<DummyLv2CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyLv2CompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyLv2CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
