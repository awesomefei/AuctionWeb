var AuctionApp;
(function (AuctionApp) {
    Configuration.$inject = [
        '$locationProvider',
        '$urlRouterProvider'
    ];
    function Configuration($locationProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }
    AuctionApp.Configuration = Configuration;
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=app.config.js.map