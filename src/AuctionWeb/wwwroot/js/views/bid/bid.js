var AuctionApp;
(function (AuctionApp) {
    var Views;
    (function (Views) {
        var Bid;
        (function (Bid) {
            var module = angular.module('app.bid', []);
            module.config(Bid.Configuration);
            module.controller('BidController', Bid.BidController);
        })(Bid = Views.Bid || (Views.Bid = {}));
    })(Views = AuctionApp.Views || (AuctionApp.Views = {}));
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=bid.js.map