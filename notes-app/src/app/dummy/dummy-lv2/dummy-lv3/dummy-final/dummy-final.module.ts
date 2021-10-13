import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterfallDummyComponent } from './waterfall-dummy/waterfall-dummy.component';



@NgModule({
  declarations: [
    WaterfallDummyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WaterfallDummyComponent
  ]
})
export class DummyFinalModule { }
