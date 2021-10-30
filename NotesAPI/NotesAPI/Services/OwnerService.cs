using NotesAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesAPI.Services
{
    public class OwnerService : IOwnerService
    {
        private List<Owner> _owners = new List<Owner>
        {
            new Owner(){ Id = new System.Guid("0826c936-ae5d-4567-83cc-6d9e0b5616cd"), Name = "First Owner"},
            new Owner(){ Id = new System.Guid("90a610a6-1eff-4e11-9583-b9757f248f49"), Name = "Second Owner"}
        };

        public bool Create(Owner model)
        {
            _owners.Add(model);
            return _owners.Contains(model);
        }

        public bool Delete(Guid id)
        {
            int index = _owners.FindIndex(owner => owner.Id == id);
            if (index == -1)
            {
                return false;
            }

            _owners.RemoveAt(index);

            return true;
        }

        public Owner Get(Guid id)
        {
            return _owners.FirstOrDefault(note => note.Id == id);
        }

        public List<Owner> GetAll()
        {
            return _owners;
        }

        public bool Update(Guid id, Owner model)
        {
            int index = _owners.FindIndex(note => note.Id == id);
            if (index == -1)
            {
                return false;
            }

            model.Id = _owners[index].Id;
            _owners[index] = model;

            return true;
        }
    }
}
