using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Http;
using MvcApplication1.Models;
using MvcApplication1.App_Start;

namespace MvcApplication1.Controllers
{
    public class ClientController : ApiController
    {
        // GET api/clients
        public IEnumerable<Client> Get()
        {
            var database = new Db();
            return database.Clients.ToList();
        }

        // GET api/values/5
        public IEnumerable<Room> Get(int id)
        {
            var database = new Db();
            var resp = database.Rooms.Where(m => m.Id == id).ToArray();
            return resp;
        }

        // POST api/values
        public string Post(Room room)
        {
            var database = new Db();
            database.Rooms.Add(new Room
            {
                CountOfPlaces = room.CountOfPlaces,
                Floor = room.Floor,
                BusyTime = null,
                IsFree = true
            });
            database.SaveChanges();
            return "{success: true}";
        }

        // PUT api/values/5
        public string Put(int id, Room room)
        {
            var database = new Db();
            Room r = database.Rooms.First(i => i.Id == id);
            r.BusyTime = room.BusyTime;
            r.ClientName = room.ClientName;
            r.IsFree = false;
            database.Clients.Add(new Client { ClientName = room.ClientName, RoomId = room.Id });
            database.SaveChanges();
            return "{'success': true}";
        }
        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
