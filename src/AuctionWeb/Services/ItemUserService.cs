using ActionApp.Models;
using ActionApp.Repositories;
using ActionApp.Services;
using AuctionWeb.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuctionWeb.Services
{
    public class ItemUserService
    {
        private IGerneralRepositpry repo;
        private ApplicationDbContext db;

        public ItemUserService(ApplicationDbContext db, IGerneralRepositpry repo)
        {
            this.db = db;
            this.repo = repo;
        }
        public ItemUserViewModel SaveItemUser(ItemUserViewModel itemUser)
        {

            return repo.Save< ItemUserViewModel>(itemUser);
        }



    }
}
