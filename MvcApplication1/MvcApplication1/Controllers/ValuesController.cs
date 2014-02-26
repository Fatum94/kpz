using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using MvcApplication1.App_Start;
using MvcApplication1.Models;
using Newtonsoft.Json;

namespace MvcApplication1.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<Room> Get()
        {
            var database = new Db();
            return new Db().Rooms.ToList();
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
            database.Clients.Add(new Client { ClientName = room.ClientName, Room = r});
            database.SaveChanges();
            return "{'success': true}";
        }
        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}