import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyLv2CompComponent } from './dummy-lv2-comp/dummy-lv2-comp.component';
import { DummyLv3Module } from './dummy-lv3/dummy-lv3.module';



@NgModule({
  declarations: [
    DummyLv2CompComponent
  ],
  imports: [
    CommonModule,
    DummyLv3Module
  ],
  exports: [
    DummyLv2CompComponent
  ]
})
export class DummyLv2Module { }
