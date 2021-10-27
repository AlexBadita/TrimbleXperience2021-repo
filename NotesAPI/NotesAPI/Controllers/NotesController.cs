using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace NotesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NotesController : ControllerBase
    {
        static List<Note> _notes = new List<Note> {
            new Note { Id = new System.Guid("debb12fa-b9a3-41d2-b1e1-09270d6ab047"), CategoryId = "1", OwnerId = new System.Guid("0826c936-ae5d-4567-83cc-6d9e0b5616cd"), Title = "First Note", Description = "First Note Description" },
            new Note { Id = new System.Guid("397ec010-5e15-4db2-9ce9-60da64d799ba"), CategoryId = "1", OwnerId = new System.Guid("90a610a6-1eff-4e11-9583-b9757f248f49"), Title = "Second Note", Description = "Second Note Description" },
            new Note { Id = new System.Guid(), CategoryId = "1", OwnerId = new System.Guid(), Title = "Third Note", Description = "Third Note Description" },
            new Note { Id = new System.Guid(), CategoryId = "1", OwnerId = new System.Guid(), Title = "Fourth Note", Description = "Fourth Note Description" },
            new Note { Id = new System.Guid(), CategoryId = "1", OwnerId = new System.Guid(), Title = "Fifth Note", Description = "Fifth Note Description" }
        };

        public NotesController() { }

        /// <summary>
        ///     Returns a list of notes
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpGet]
        public IActionResult GetNotes()
        {
            return Ok(_notes);
        }

        /// <summary>
        ///     Create a note
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpPost]
        public IActionResult CreateNote([FromBody] Note note)
        {
            _notes.Add(note);
            //return Ok(_notes);
            return CreatedAtRoute("GetNote", new { id = note.Id.ToString() }, note);
        }

        /// <summary>
        ///     Get note by owner id
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpGet("OwnerId/{id}")]
        public IActionResult GetNotesByOwnerId(Guid id)
        {
            List<Note> notesByOwner = _notes.FindAll(note => note.OwnerId == id);
            if(notesByOwner == null)
            {
                return BadRequest("Owner Not Found!");
            }
            return Ok(notesByOwner);
        }

        /// <summary>
        ///     Get note by id
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpGet("{id}", Name = "GetNote")]
        public IActionResult GetNotesById(Guid id)
        {
            Note note = _notes.Find(note => note.Id == id);
            if(note == null)
            {
                return BadRequest("Note Not Found!");
            }
            return Ok(note);
        }
    }
}
