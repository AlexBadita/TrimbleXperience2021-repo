import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dummy1Component } from './dummy1/dummy1.component';
import { Dummy2Component } from './dummy2/dummy2.component';
import { DummyLv2Module } from './dummy-lv2/dummy-lv2.module';
import { DummyLv2CompComponent } from './dummy-lv2/dummy-lv2-comp/dummy-lv2-comp.component';
import { DummyCompComponent } from './dummy-comp/dummy-comp.component';



@NgModule({
  declarations: [
    Dummy1Component,
    Dummy2Component,
    DummyCompComponent
  ],
  imports: [
    CommonModule,
    DummyLv2Module
  ],
  exports: [
    Dummy1Component,
    Dummy2Component,
    DummyCompComponent
  ]
})
export class DummyModule { }
