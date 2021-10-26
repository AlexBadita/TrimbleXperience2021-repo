﻿using Microsoft.AspNetCore.Mvc;
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
        /// <returns>return type</returns>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Note controller works");
        }

    }
}