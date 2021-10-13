import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Curs3Component } from './curs3/curs3.component';
import { TestModule } from './test/test.module';
import { DummyModule } from './dummy/dummy.module';

@NgModule({
  declarations: [
    AppComponent,
    Curs3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TestModule,
    DummyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
