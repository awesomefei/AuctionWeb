using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using ActionApp.Models;

namespace AuctionWeb.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        //public string NICKNAME { get; set; }
        public ICollection<ItemUser> ItemUsers { get; set; }
    }
}
