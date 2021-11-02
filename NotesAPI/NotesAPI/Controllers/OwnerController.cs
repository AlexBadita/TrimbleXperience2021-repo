using Microsoft.AspNetCore.Mvc;
using NotesAPI.Models;
using NotesAPI.Services;
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
        IOwnerService _ownerService;

        public OwnerController(IOwnerService ownerService)
        {
            _ownerService = ownerService ?? throw new ArgumentNullException(nameof(ownerService));
        }

        /// <summary>
        ///     Get all owners
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetOwners()
        {
            List<Owner> owners = await _ownerService.GetAll();
            return Ok(owners);
        }

        /// <summary>
        ///     Get owner by id
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOwnerById(Guid id)
        {
            if (id == null)
            {
                return BadRequest("Id cannot be null!");
            }

            Owner owner = await _ownerService.Get(id);
            if (owner == null)
            {
                return NoContent();
            }

            return Ok(owner);
        }

        /// <summary>
        ///     Add a new owner
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> CreateOwner([FromBody] Owner owner)
        {
            if (owner == null)
            {
                return BadRequest("Owner cannot be null!");
            }

            if (await _ownerService.Create(owner))
            {
                return Ok("Owner added successfully!");
            }

            return NoContent();
        }

        /// <summary>
        ///     Delete owner by id
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOwner(Guid id)
        {
            if (id == null)
            {
                return BadRequest("Id cannot be null!");
            }

            if (await _ownerService.Delete(id))
            {
                return NoContent();
            }

            return NotFound("Owner not found!");
        }

        /// <summary>
        ///     Update owner by id
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOwner(Guid id, [FromBody] Owner owner)
        {
            if (owner == null)
            {
                return BadRequest("Owner cannot be null");
            }

            if (await _ownerService.Update(id, owner))
            {
                return Ok(_ownerService.Get(id));
            }

            return NotFound("Owner not found!");
        }

        ///// <summary>
        /////     Update onwer name by id
        ///// </summary>
        ///// <returns></returns>
        //[HttpPatch("{id}/name")]
        //public IActionResult UpdateOwnerName(Guid id, [FromBody] string name)
        //{
        //    if (string.IsNullOrEmpty(name))
        //    {
        //        return BadRequest("Name cannot be null!");
        //    }

        //    int index = _owners.FindIndex(owner => owner.Id == id);
        //    if (index == -1)
        //    {
        //        return NotFound();
        //    }

        //    _owners[index].Name = name;
        //    return Ok(_owners[index]);
        //}
    }
}
