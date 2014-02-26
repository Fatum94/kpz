using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Http;
using MvcApplication1.Models;
using MvcApplication1.App_Start;
using System.Data.Entity;

namespace MvcApplication1.Controllers
{
    public class ClientController : ApiController
    {
        // GET api/clients
        public IEnumerable<Client> Get()
        {
            var database = new Db();
            return database.Clients.Include(c=>c.Room).ToList();
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

        // PUT api/client/5
        public string Put(int id, Client client)
        {
            var database = new Db();
            Room r = database.Rooms.First(i => i.Id == id);
            if (client.Room.BusyTime != null)
            {
                r.BusyTime = client.Room.BusyTime;
            }
            if (client.Room.Floor != 0) {
                r.Floor = client.Room.Floor;
            } 
            database.SaveChanges();
            return "{'success': true}";
        }
        // DELETE api/client/5
        public string Delete(int id)
        {
            var database = new Db();
            Client client = database.Clients.First(c=>c.Id == id);
            Room room = database.Rooms.FirstOrDefault(r => r.ClientName == client.ClientName);
            room.ClientName = "";
            room.IsFree = true;
            room.BusyTime = null;
            database.Clients.Remove(client);
            database.SaveChanges();
            return "ddd";
        }
    }
}
