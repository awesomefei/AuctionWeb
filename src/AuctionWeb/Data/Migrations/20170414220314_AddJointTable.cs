using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AuctionWeb.Data.Migrations
{
    public partial class AddJointTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ItemUsers",
                columns: table => new
                {
                    AuctionItemId = table.Column<int>(nullable: false),
                    UserId = table.Column<string>(nullable: false),
                    Bid = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItemUsers", x => new { x.AuctionItemId, x.UserId });
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ItemUsers");
        }
    }
}
