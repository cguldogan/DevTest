﻿using System;

namespace DeveloperTest.Models
{
    public class BaseJobModel
    {
        
        public string Customer { get; set; }
        public string JobId { get; set; }
        
        public string Engineer { get; set; }

        public DateTime When { get; set; }
    }
}
