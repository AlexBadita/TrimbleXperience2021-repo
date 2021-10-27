using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoriesController: ControllerBase
    {
        List<Category> categories = new List<Category>() { 
            new Category(){ Id = "1", Name = "To Do"},
            new Category(){ Id = "2", Name = "Doing"},
            new Category(){ Id = "3", Name = "Done"}
        };
        public CategoriesController() { }

        /// <summary>
        ///     Returns the list of categories
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpGet("")]
        public IActionResult Get()
        {
            return Ok(this.categories);
        }

        /// <summary>
        ///     Returns a category by id
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpGet("{id}")]
        public IActionResult GetWithParams(string id)
        {
            return Ok(this.categories.Find(x => x.Id == id));
        }

        /// <summary>
        ///     Create a new category
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns>return type</returns>
        [HttpPost("")]
        public IActionResult Post([FromBody] Category newCategory)
        {
            this.categories.Add(newCategory);
            return Ok(this.categories);
        }

        /// <summary>
        ///     Delete a category by id
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            this.categories.Remove(this.categories.Find(x => x.Id == id));
            return Ok(this.categories);
        }
    }
}
