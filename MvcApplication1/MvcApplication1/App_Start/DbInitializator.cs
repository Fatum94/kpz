using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using MvcApplication1.Models;

namespace MvcApplication1.App_Start
{
    public class DbInitializator : DropCreateDatabaseIfModelChanges<Db>
    {
        protected override void Seed(Db context)
        {

            context.Rooms.Add(new Room { CountOfPlaces = 2, Floor = 1, IsFree = true, BusyTime = null, Id = 1 });

            context.SaveChanges();

            base.Seed(context);
        }
    }
}