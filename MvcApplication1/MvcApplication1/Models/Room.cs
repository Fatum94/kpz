using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApplication1.Models
{
    public class Room
    {
        public int Id { get; set; }
        public int CountOfPlaces { get; set; }
        public int Floor { get; set; }
        public bool IsFree { get; set; }
        public Nullable<DateTime> BusyTime { get; set; }
        public string ClientName { get; set; }

    }
}