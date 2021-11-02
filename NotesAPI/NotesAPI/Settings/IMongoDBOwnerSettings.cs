﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesAPI.Settings
{
    public interface IMongoDBOwnerSettings
    {
        string OwnerName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
