using AuctionWeb.Models;
using System.ComponentModel.DataAnnotations;

namespace ActionApp.Models
{
    public class ItemUser
    {
        //Navigation property movie
        public AuctionItem AuctionItem { get; set; }
        //foreign key Movie.Id
        public int AuctionItemId { get; set; }

        //Navigation property actor
        public ApplicationUser User { get; set; }
        //foreign key Actor.Id
        [Required]
        public string UserId { get; set; }

        public int Bid { get; set; }

    }
    public class ItemUserViewModel
    {
        public int AuctionItemId { get; set; }
        public string UserId { get; set; }
        public int Bid { get; set; }
    }
}
