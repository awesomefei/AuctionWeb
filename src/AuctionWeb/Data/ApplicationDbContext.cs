using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using AuctionWeb.Models;
using ActionApp.Models;

namespace AuctionWeb.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<AuctionItem> AuctionItems { get; set; }
        //public DbSet<UserViewModel> User { get; set; }
        public DbSet<ItemUserViewModel> ItemUsers { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<ItemUser>().HasKey(x => new { x.AuctionItemId, x.UserId });
            builder.Entity<ItemUserViewModel>().HasKey(x => new { x.AuctionItemId, x.UserId });
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }
    }
}
