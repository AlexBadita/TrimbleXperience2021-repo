import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteComponent } from './note.component';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  notes: Note[] = [
    {
      id: "Id1",
      title: "First note",
      description: "This is the description for the first note"
    },
    {
      id: "Id2",
      title: "Second note",
      description: "This is the description for the second note"
    }
  ];

});
