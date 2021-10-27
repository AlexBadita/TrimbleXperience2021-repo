using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NotesController: ControllerBase
    {
        public NotesController() { }

        /// <summary>
        ///     Returns a list of notes
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns>return type</returns>
        [HttpGet("{id}")]
        public IActionResult GetWithParams(string id)
        {
            return Ok(id);
        }

        /// <summary>
        ///     Returns a list of notes
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns>return type</returns>
        [HttpGet("")]
        public IActionResult Get()
        {
            return Ok("FROM GET");
        }

        /// <summary>
        ///     Create a new note
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns>return type</returns>
        [HttpPost("")]
        public IActionResult Post([FromBody] Note bodyContent)
        {
            return Ok(bodyContent);
        }
    }
}
