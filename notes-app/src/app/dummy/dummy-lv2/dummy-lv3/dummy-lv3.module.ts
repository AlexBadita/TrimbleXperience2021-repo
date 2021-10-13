import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyLv3CompComponent } from './dummy-lv3-comp/dummy-lv3-comp.component';
import { DummyFinalModule } from './dummy-final/dummy-final.module';



@NgModule({
  declarations: [
    DummyLv3CompComponent
  ],
  imports: [
    CommonModule,
    DummyFinalModule
  ],
  exports: [
    DummyLv3CompComponent
  ]
})
export class DummyLv3Module { }
