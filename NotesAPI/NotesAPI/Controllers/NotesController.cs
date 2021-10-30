using Microsoft.AspNetCore.Mvc;
using NotesAPI.Services;
using System;
using System.Collections.Generic;

namespace NotesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NotesController : ControllerBase
    {
        INoteCollectionService _noteCollectionService;

        public NotesController(INoteCollectionService noteCollectionService) 
        {
            _noteCollectionService = noteCollectionService ?? throw new ArgumentNullException(nameof(noteCollectionService));
        }

        /// <summary>
        ///     Returns a list of notes
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpGet]
        public IActionResult GetNotes()
        {
            return Ok(_noteCollectionService.GetAll());
        }

        /// <summary>
        ///     Create a note
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpPost]
        public IActionResult CreateNote([FromBody] Note note)
        {
            if (note == null)
            {
                return BadRequest("Note cannot be null!");
            }

            if (_noteCollectionService.Create(note))
            {
                return CreatedAtRoute("GetNote", new { id = note.Id.ToString() }, note);
            }
            return NoContent();
        }

        /// <summary>
        ///     Get note by owner id
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpGet("OwnerId/{ownerId}")]
        public IActionResult GetNotesByOwnerId(Guid ownerId)
        {
            if(ownerId == null)
            {
                return BadRequest("Id cannot be null!");
            }

            List<Note> notesByOwner = _noteCollectionService.GetNotesByOwnerId(ownerId);
            if (notesByOwner.Count > 0)
            {
                return NoContent();
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
            if (id == null)
            {
                return BadRequest("Id cannot be null!");
            }

            Note note = _noteCollectionService.Get(id);
            if (note == null)
            {
                return NoContent();
            }

            return Ok(note);
        }

        /// <summary>
        ///     Update note by id
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpPut("{id}")]
        public IActionResult UpdateNote(Guid id, [FromBody] Note note)
        {
            if (note == null)
            {
                return BadRequest("Note cannot be null");
            }

            if (_noteCollectionService.Update(id, note))
            {
                return Ok(_noteCollectionService.Get(id));
            }

            return NotFound("Note not found!");
        }

        /// <summary>
        ///     Delete note by id
        /// </summary>
        /// <response code="404">Not Found</response>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public IActionResult DeleteNote(Guid id)
        {
            if (id == null)
            {
                return BadRequest("Id cannot be null!");
            }

            if (_noteCollectionService.Delete(id))
            {
                return NoContent();
            }

            return NotFound("Note not found!");
        }

        ///// <summary>
        /////     Update title for note by id
        ///// </summary>
        ///// <returns></returns>
        //[HttpPatch("{id}/title")]
        //public IActionResult UpdateNoteTitle(Guid id, [FromBody] string title)
        //{
        //    if (string.IsNullOrEmpty(title))
        //    {
        //        return BadRequest("Title cannot be null!");
        //    }

        //    int index = _notes.FindIndex(note => note.Id == id);
        //    if (index == -1)
        //    {
        //        return NotFound();
        //    }

        //    _notes[index].Title = title;
        //    return Ok(_notes[index]);
        //}

        ///// <summary>
        /////     Update title for note by id and ownerId
        ///// </summary>
        ///// <returns></returns>
        //[HttpPatch("{id}/{ownerId}/title")]
        //public IActionResult UpdateNoteTitleByIds(Guid id, Guid ownerId, [FromBody] string title)
        //{
        //    if (string.IsNullOrEmpty(title))
        //    {
        //        return BadRequest("Title cannot be null!");
        //    }

        //    int index = _notes.FindIndex(note => (note.Id == id) && (note.OwnerId == ownerId));
        //    if(index == -1)
        //    {
        //        return NotFound();
        //    }

        //    _notes[index].Title = title;
        //    return Ok(_notes[index]);
        //}

        ///// <summary>
        /////     Delete note by id and ownerId
        ///// </summary>
        ///// <returns></returns>
        //[HttpDelete("{id}/{ownerId}")]
        //public IActionResult DeleteNoteTitleByIds(Guid id, Guid ownerId)
        //{
        //    int index = _notes.FindIndex(note => (note.Id == id) && (note.OwnerId == ownerId));
        //    if (index == -1)
        //    {
        //        return NotFound();
        //    }

        //    _notes.RemoveAt(index);

        //    return NoContent();
        //}

        ///// <summary>
        /////     Delete all notes by ownerId
        ///// </summary>
        ///// <returns></returns>
        //[HttpDelete("owner/{ownerId}")]
        //public IActionResult DeleteNotesByOwner(Guid ownerId)
        //{
        //    List<Note> notesByOwner = _notes.FindAll(note => note.OwnerId == ownerId);
        //    if (notesByOwner.Count > 0)
        //    {
        //        return NotFound();
        //    }

        //    _notes.RemoveAll(note => note.OwnerId == ownerId);

        //    return NoContent();
        //}
    }
}