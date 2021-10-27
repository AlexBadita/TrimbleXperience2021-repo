using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace NotesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoriesController : ControllerBase
    {
        List<Category> _categories = new List<Category> {
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
        public IActionResult GetCategory()
        {
            return Ok(_categories);
        }

        /// <summary>
        ///     Returns a category by id
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpGet("{id}")]
        public IActionResult GetCategoryById(string id)
        {
            Category resultCategory = _categories.Find(category => category.Id == id);
            if(resultCategory == null)
            {
                return BadRequest("Category Not Found!");
            }
            return Ok(resultCategory);
        }

        /// <summary>
        ///     Create a new category
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns>return type</returns>
        [HttpPost("")]
        public IActionResult AddCategory([FromBody] Category newCategory)
        {
            if(_categories.Find(catetogry => catetogry.Id == newCategory.Id) == null)
            {
                return BadRequest("Duplicate Id!");
            }
            _categories.Add(newCategory);
            return Ok(_categories);
        }

        /// <summary>
        ///     Delete a category by id
        /// </summary>
        /// <response code="400">Bad Request</response>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public IActionResult DeleteCategory(string id)
        {
            Category categoryToDelete = _categories.Find(category => category.Id == id);
            if (_categories.Contains(categoryToDelete))
            {
                _categories.Remove(_categories.Find(category => category.Id == id));
                return Ok(_categories);
            }
            return BadRequest("Category Not Found!");
        }
    }
}
