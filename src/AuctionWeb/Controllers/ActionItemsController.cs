using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ActionApp.Services;
using ActionApp.Models;
using AuctionWeb.Models;
using Microsoft.AspNetCore.Identity;

namespace ActionApp.Controllers
{
    [Route("api/[controller]")]
    public class ActionItemsController : Controller
    {
        //private readonly UserManager<ApplicationUser> _userManager;
        private AuctionItemService service;

        public ActionItemsController(
            AuctionItemService service
            )
        {
            this.service = service;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<AuctionItemViewModel> Get()
        {
            return service.GetAuctionItems();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            AuctionItemViewModel auctionItem = service.GetAuctionItemById(id);
            if(auctionItem == null)
            {
                return NotFound();
            }
            return Ok(auctionItem);
        }

        // POST api/auctionitems
        [HttpPut("{id}")]
        //public IActionResult Bid([FromBody]ItemUserViewModel itemUser, int itemId, int userId)
        //{
        //    // user bids on  item
        //    var user = GetCurrentUserAsync();
        //    if (service.Bid(itemUser, itemId, user.Id))
        //    {
        //        return Ok();
        //    }
        //    return BadRequest();
            
           
        //}

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]AuctionItemViewModel value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (!service.UpdateAuctionItem(id,  value))
            {
                return NotFound();
            }
            return NoContent();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        //private Task<ApplicationUser> GetCurrentUserAsync()
        //{
        //    return _userManager.GetUserAsync(HttpContext.User);
        //}
    }
}
