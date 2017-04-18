using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ActionApp.Models
{
    public class AuctionItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int MinimumBid { get; set; }
        public int NumberOfBids { get; set; }
        public string ImageUrl { get; set; }

        public ICollection <ItemUser> ItemUsers { get; set; }
    }

    public class AuctionItemViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int MinimumBid { get; set; }
        public int NumberOfBids { get; set; }
        public string ImageUrl { get; set; }

        public IEnumerable<UserViewModel> Users { get; set; }
    }
}
