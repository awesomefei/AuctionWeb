namespace AuctionApp.Views.Bid {
    let module: ng.IModule = angular.module('app.bid', []);

    module.config(Bid.Configuration);

    module.controller('BidController', BidController);
}