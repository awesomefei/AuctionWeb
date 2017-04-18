using ActionApp.Models;
using ActionApp.Repositories;
using AuctionWeb.Data;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ActionApp.Services
{
    public class UserService : IDisposable
    {
        private IGerneralRepositpry repo;
        private ApplicationDbContext db;

        public UserService(ApplicationDbContext db, IGerneralRepositpry repo)
        {
            this.db = db;
            this.repo = repo;
        }

        public IEnumerable<UserViewModel> GetUsers()
        {
            return db.Users
              .Select(x => new UserViewModel()
              {
                  Id = x.Id,
                  UserName = x.UserName,
                  Email = x.Email,
                  AuctionItems = x.ItemUsers
                  .Select(y => new AuctionItemViewModel()
                  {
                      Id = y.AuctionItem.Id,
                      Name = y.AuctionItem.Name,
                      Description = y.AuctionItem.Description,
                      MinimumBid = y.AuctionItem.MinimumBid,
                      NumberOfBids = y.AuctionItem.NumberOfBids,
                      ImageUrl = y.AuctionItem.ImageUrl,
                  })
              });
            }
    
        public UserViewModel getUserById(string id)
        {
            UserViewModel user = db.Users
              .Where(x => x.Id == id)
              .Select(x => new UserViewModel()
              {
                  UserName = x.UserName,
                  Email = x.Email,
                  AuctionItems = x.ItemUsers
                  .Select(y => new AuctionItemViewModel()
                  {
                      Id = y.AuctionItem.Id,
                      Name = y.AuctionItem.Name,
                      Description = y.AuctionItem.Description,
                      MinimumBid = y.AuctionItem.MinimumBid,
                      NumberOfBids = y.AuctionItem.NumberOfBids,
                      ImageUrl = y.AuctionItem.ImageUrl,
                  })
              }).FirstOrDefault();
            return user;

        }

        //public User SaveUser(User user)
        //{
        //    return repo.Save<User>(user);
        //}

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}
