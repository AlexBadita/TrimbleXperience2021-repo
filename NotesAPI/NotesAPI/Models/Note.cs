using System;
using System.ComponentModel.DataAnnotations;

namespace NotesAPI
{
    public class Note
    {
        public Guid Id { get; set; }
        public Guid OwnerId { get; set; }

        [Required]
        public string Title { get; set; }
        public string Description { get; set; }
        public string CategoryId { get; set; }
    }
}
