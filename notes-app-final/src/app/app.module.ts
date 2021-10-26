import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent } from './filter/filter.component';
import { ToolsComponent } from './tools/tools.component';
import { NoteComponent } from './note/note.component';
import { HomeComponent } from './home/home.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from "@angular/material/card";
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NoteService } from './services/note.service';
import { FiltersService } from './services/filters.service';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpMockApiInterceptor } from './services/http-mock-api.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ToolsComponent,
    NoteComponent,
    HomeComponent,
    AddNoteComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    CommonModule,
    HttpClientModule 
  ],
  providers: [
    NoteService,
    FiltersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpMockApiInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
