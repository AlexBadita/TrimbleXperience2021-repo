using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesAPI.Services
{
    public class NoteCollectionService : INoteCollectionService
    {
        private List<Note> _notes = new List<Note> { 
            new Note { Id = new Guid("00000000-0000-0000-0000-000000000001"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000001"), Title = "First Note", Description = "First Note Description" },
            new Note { Id = new Guid("00000000-0000-0000-0000-000000000002"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000001"), Title = "Second Note", Description = "Second Note Description" },
            new Note { Id = new Guid("00000000-0000-0000-0000-000000000003"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000001"), Title = "Third Note", Description = "Third Note Description" },
            new Note { Id = new Guid("00000000-0000-0000-0000-000000000004"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000001"), Title = "Fourth Note", Description = "Fourth Note Description" },
            new Note { Id = new Guid("00000000-0000-0000-0000-000000000005"), CategoryId = "1", OwnerId = new Guid("00000000-0000-0000-0000-000000000001"), Title = "Fifth Note", Description = "Fifth Note Description" }
        };

        public bool Create(Note model)
        {
            _notes.Add(model);
            return _notes.Contains(model);
        }

        public bool Delete(Guid id)
        {
            int index = _notes.FindIndex(note => note.Id == id);
            if (index == -1)
            {
                return false;
            }

            _notes.RemoveAt(index);

            return true;
        }

        public Note Get(Guid id)
        {
            return _notes.FirstOrDefault(note => note.Id == id);
        }

        public List<Note> GetAll()
        {
            return _notes;
        }

        public List<Note> GetNotesByOwnerId(Guid ownerId)
        {
            List<Note> notesByOwner = _notes.FindAll(note => note.OwnerId == ownerId);
            return notesByOwner;
        }

        public bool Update(Guid id, Note model)
        {
            int index = _notes.FindIndex(note => note.Id == id);
            if (index == -1)
            {
                return false;
            }

            model.Id = _notes[index].Id;
            _notes[index] = model;

            return true;
        }
    }
}
