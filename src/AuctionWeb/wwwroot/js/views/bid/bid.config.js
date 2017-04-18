var AuctionApp;
(function (AuctionApp) {
    var Views;
    (function (Views) {
        var Bid;
        (function (Bid) {
            Configuration.$inject = [
                '$stateProvider'
            ];
            function Configuration($stateProvider) {
                $stateProvider
                    .state('Bid', {
                    url: '/bid',
                    templateUrl: 'js/views/bid/bid.view.html',
                    controller: 'BidController',
                    controllerAs: 'vm'
                });
            }
            Bid.Configuration = Configuration;
        })(Bid = Views.Bid || (Views.Bid = {}));
    })(Views = AuctionApp.Views || (AuctionApp.Views = {}));
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=bid.config.js.map