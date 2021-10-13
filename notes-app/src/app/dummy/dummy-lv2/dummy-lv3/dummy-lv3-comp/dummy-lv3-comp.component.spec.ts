import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyLv3CompComponent } from './dummy-lv3-comp.component';

describe('DummyLv3CompComponent', () => {
  let component: DummyLv3CompComponent;
  let fixture: ComponentFixture<DummyLv3CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyLv3CompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyLv3CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
