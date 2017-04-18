using ActionApp.Models;
using ActionApp.Repositories;
using AuctionWeb.Data;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ActionApp.Services
{
    public class AuctionItemService : IDisposable
    {
        private IGerneralRepositpry repo;
        private ApplicationDbContext db;

        public AuctionItemService(ApplicationDbContext db, IGerneralRepositpry repo)
        {
            this.db = db;
            this.repo = repo;
        }

        public AuctionItemService(IGerneralRepositpry repo)
        {
            this.repo = repo;
        }



        public IEnumerable<AuctionItemViewModel> GetAuctionItems()
        {
            return repo.List<AuctionItem>()
                .Select(x => new AuctionItemViewModel() {
                    Id = x.Id,
                    Name = x.Name,
                    Description = x.Description,
                    MinimumBid = x.MinimumBid,
                    NumberOfBids = x.NumberOfBids,
                    ImageUrl = x.ImageUrl,
                    //Users = x.ItemUsers
                    //.Select(y => new UserViewModel()
                    //{
                    //    Id = y.User.Id,
                    //    Email = y.User.Email,
                    //    UserName = y.User.UserName
                    //})
                });
        }

        public AuctionItemViewModel GetAuctionItemById(int id)
        {
            AuctionItemViewModel auctionItem = repo.List<AuctionItem>()
                .Where(x => x.Id == id)
                .Select(x => new AuctionItemViewModel()
                 {
                    Id = x.Id,
                     Name = x.Name,
                     Description = x.Description,
                     MinimumBid = x.MinimumBid,
                     NumberOfBids = x.NumberOfBids,
                     ImageUrl = x.ImageUrl,
                })
                .FirstOrDefault();
            return auctionItem;
        }

        public AuctionItem SaveAuctionItem(AuctionItem AuctionItem)
        {
            return repo.Save<AuctionItem>(AuctionItem);
        }

        public bool UpdateAuctionItem(int id, AuctionItemViewModel AuctionItem)
        {
            var record = GetAuctionItemById(id);
            if (record == null)
            {
                return false;
            }
            record.Name = AuctionItem.Name;
            record.Description = AuctionItem.Description;
            record.MinimumBid = AuctionItem.MinimumBid;
            record.NumberOfBids = AuctionItem.NumberOfBids;
            record.ImageUrl = AuctionItem.ImageUrl;
            record.Users = AuctionItem.Users;
            repo.Update<AuctionItemViewModel>(record);
            return true;
        }

        public bool DeleteAuctionItem(int id)
        {
            var record = GetAuctionItemById(id);
            if (record == null)
            {
                return false;
            }
            repo.Delete(record);
            return true;
        }

        public void Dispose()
        {
            repo.Dispose();
        }
    
    }
}
