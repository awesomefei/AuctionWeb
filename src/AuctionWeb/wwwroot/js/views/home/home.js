var AuctionApp;
(function (AuctionApp) {
    var Views;
    (function (Views) {
        var Home;
        (function (Home) {
            var module = angular.module('app.home', []);
            module.config(Home.Configuration);
            module.controller('HomeController', Home.HomeController);
        })(Home = Views.Home || (Views.Home = {}));
    })(Views = AuctionApp.Views || (AuctionApp.Views = {}));
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=home.js.map