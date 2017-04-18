var AuctionApp;
(function (AuctionApp) {
    var Views;
    (function (Views) {
        var Home;
        (function (Home) {
            var HomeController = (function () {
                function HomeController($resource, $uibModal, authService, $state, AuthenticationService) {
                    this.$resource = $resource;
                    this.$uibModal = $uibModal;
                    this.authService = authService;
                    this.$state = $state;
                    this.AuthenticationService = AuthenticationService;
                    this.auctionItems = [];
                    this.bidUsersForEachItem = [];
                    this.AuctionResource = this.$resource('api/actionItems/:id');
                    this.ItemUserResource = this.$resource('api/itemUser/:id');
                    this.ItemUserForWinnersNameResource = this.$resource('api/itemUser/bid/:id');
                    this.ItemUserWinnersBiddedValueResource = this.$resource('api/itemUser/WinnersBiddedValue/:id');
                    this.getAuctionItems();
                    this.User = new AuctionApp.Model.UserLogin('', '');
                }
                Object.defineProperty(HomeController.prototype, "user", {
                    get: function () {
                        return this.authService.User;
                    },
                    enumerable: true,
                    configurable: true
                });
                HomeController.prototype.logoff = function () {
                    if (this.AuthenticationService.logout(this.User)) {
                        this.$state.go('Home');
                        return;
                    }
                    console.log('User failed to login');
                };
                HomeController.prototype.isUserLoggedIn = function () {
                    return this.authService.isUserAuthenticated();
                };
                HomeController.prototype.bid = function (id) {
                    var _this = this;
                    this.$uibModal.open({
                        templateUrl: '/js/views/bid/bid.view.html',
                        controller: 'BidController',
                        controllerAs: "vm",
                        resolve: {
                            auctionItemId: function () { return id; },
                        },
                        size: 'lg'
                    }).result.then(function (data) {
                        if (data.hasBeenEdited == true) {
                            _this.getAuctionItems();
                        }
                    });
                };
                HomeController.prototype.getAuctionItems = function () {
                    var _this = this;
                    this.AuctionResource.query().$promise
                        .then(function (result) {
                        result.forEach(function (auctionItem) {
                            auctionItem['biddedUsers'] = _this.getBidUsers(auctionItem.id);
                            auctionItem['biddedUsers'].$promise
                                .then(function (response) {
                                if (response.length >= auctionItem.numberOfBids) {
                                    auctionItem['disabledButton'] = true;
                                    auctionItem['winnersName'] = _this.getWinnersName(auctionItem.id);
                                    auctionItem['winnersBiddedValue'] = _this.getWinnersBiddedValue(auctionItem.id);
                                }
                                else {
                                    auctionItem['disabledButton'] = false;
                                }
                            });
                            _this.auctionItems.push(auctionItem);
                        });
                    });
                };
                HomeController.prototype.getBidUsers = function (auctionId) {
                    return this.ItemUserResource.query({ id: auctionId });
                };
                HomeController.prototype.getWinnersName = function (auctionId) {
                    return this.ItemUserForWinnersNameResource.query({ id: auctionId });
                };
                HomeController.prototype.getWinnersBiddedValue = function (auctionId) {
                    return this.ItemUserWinnersBiddedValueResource.get({ id: auctionId });
                };
                return HomeController;
            }());
            HomeController.$inject = ['$resource', '$uibModal', 'AuthenticationService', '$state',
                'AuthenticationService'];
            Home.HomeController = HomeController;
        })(Home = Views.Home || (Views.Home = {}));
    })(Views = AuctionApp.Views || (AuctionApp.Views = {}));
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=home.controller.js.map