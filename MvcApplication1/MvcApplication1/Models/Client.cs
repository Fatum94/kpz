using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcApplication1.Models
{
    public class Client 
    {
        public int Id { get; set; }
        public string ClientName { get; set; }
        public int RoomId { get; set; }

    }
}
