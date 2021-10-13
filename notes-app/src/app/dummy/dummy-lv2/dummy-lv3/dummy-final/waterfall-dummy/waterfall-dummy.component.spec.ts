import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterfallDummyComponent } from './waterfall-dummy.component';

describe('WaterfallDummyComponent', () => {
  let component: WaterfallDummyComponent;
  let fixture: ComponentFixture<WaterfallDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterfallDummyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterfallDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
