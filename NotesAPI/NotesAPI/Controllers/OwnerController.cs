using Microsoft.AspNetCore.Mvc;
using NotesAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OwnerController : ControllerBase
    {
        List<Owner> _owners = new List<Owner>
        {
            new Owner(){ Id = new System.Guid("0826c936-ae5d-4567-83cc-6d9e0b5616cd"), Name = "First Owner"},
            new Owner(){ Id = new System.Guid("90a610a6-1eff-4e11-9583-b9757f248f49"), Name = "Second Owner"}
        };

        /// <summary>
        ///     Get owner by id
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpGet("{id}")]
        public IActionResult GetOwnerById(Guid id)
        {
            Owner resultOwner = _owners.Find(owner => owner.Id == id);
            if(resultOwner == null)
            {
                return BadRequest("Owner Not Found!");
            }
            return Ok(resultOwner);
        }

        /// <summary>
        ///     Add a new owner
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpPost]
        public IActionResult CreateOwner([FromBody] Owner newOwner)
        {
            _owners.Add(newOwner);
            return Ok(_owners);
        }

    }
}
