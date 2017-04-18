using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ActionApp.Models;
using AuctionWeb.Services;
using System.Collections;
using AuctionWeb.Data;
using AuctionWeb.Models;
using Microsoft.AspNetCore.Identity;


// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AuctionWeb.Controllers
{
    [Route("api/[controller]")]
    public class ItemUserController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;

        private ItemUserService service;
        private ApplicationDbContext db;
        private UserManager<ApplicationUser> userManager;

        public ItemUserController(ItemUserService service, ApplicationDbContext db,
            UserManager<ApplicationUser> userManager)
        {
            this.db = db;
            this.service = service;
            this.userManager = userManager;
        }
        // GET api/ItemUser/bid/2
        [HttpGet("bid/{auctionItemId}")]
        public IActionResult GetBid(int auctionItemId)
        {
            var LargestBid = db.ItemUsers
                .Where(x => x.AuctionItemId == auctionItemId)
                .Select(x => new ItemUserViewModel
                {
                    Bid = x.Bid
                })
                .OrderBy(x => x.Bid)
                .FirstOrDefault();
            var bidUser = db.ItemUsers
                .Where(x => x.AuctionItemId == auctionItemId)
                .Where(x => x.Bid == LargestBid.Bid)
                .Select(x => new ItemUserViewModel
                {
                    UserId = x.UserId,
                })
                .FirstOrDefault();
            var userName = db.Users
                    .Where(x => x.Id == bidUser.UserId)
                    .Select(x => x.UserName);
            return Ok(userName);
        }

        // GET api/ItemUser/bid/2
        [HttpGet("WinnersBiddedValue/{auctionItemId}")]
        public IActionResult GetWinnersBiddedValue(int auctionItemId)
        {
            var LargestBid = db.ItemUsers
                .Where(x => x.AuctionItemId == auctionItemId)
                .Select(x => new ItemUserViewModel
                {
                    Bid = x.Bid
                })
                .OrderBy(x => x.Bid)
                .FirstOrDefault();
            return Ok(LargestBid);

        }

        // GET: api/values/auctionItemId
        [HttpGet("{auctionItemId}")]
        //[HttpGet("{auctionItemId}")]
        public IEnumerable Get(int auctionItemId)
        {
            var bidUsers = db.ItemUsers
                .Where(x => x.AuctionItemId == auctionItemId)
                .Select(x => new ItemUserViewModel
               {
                   UserId = x.UserId,
               });
            var users = new List<string>();
            foreach (ItemUserViewModel bidUser in bidUsers)
            {
                var user= db.Users
                    .Where(x => x.Id == bidUser.UserId)
                    .Select(x => x.UserName)
                    .FirstOrDefault();
                users.Add (user);
            }
            return users;
        }

        public IActionResult Post([FromBody]ItemUserViewModel itemUser)
        {
            
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            itemUser.UserId = userManager.GetUserId(User);
            db.ItemUsers.Add(itemUser);
            db.SaveChanges();
            return Ok();
        }
        private Task<ApplicationUser> GetCurrentUserAsync()
        {
            return _userManager.GetUserAsync(HttpContext.User);
        }
        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
