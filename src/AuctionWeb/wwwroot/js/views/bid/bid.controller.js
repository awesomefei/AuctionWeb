var AuctionApp;
(function (AuctionApp) {
    var Views;
    (function (Views) {
        var Bid;
        (function (Bid) {
            var BidController = (function () {
                function BidController($resource, $uibModalInstance, auctionItemId, authService, $state) {
                    this.$resource = $resource;
                    this.$uibModalInstance = $uibModalInstance;
                    this.auctionItemId = auctionItemId;
                    this.authService = authService;
                    this.$state = $state;
                    this.erro = false;
                    this.AuctionResource = this.$resource('api/actionItems/:id');
                    this.ItemUserResource = this.$resource('api/itemUser');
                    this.getAuctionItem(auctionItemId);
                    this.hasBeenEdited = false;
                }
                Object.defineProperty(BidController.prototype, "user", {
                    get: function () {
                        return this.authService.User;
                    },
                    enumerable: true,
                    configurable: true
                });
                BidController.prototype.closeModal = function () {
                    this.$uibModalInstance.close({ hasBeenEdited: this.hasBeenEdited });
                };
                BidController.prototype.getAuctionItem = function (id) {
                    return this.auctionItem = this.AuctionResource.get({ 'id': id });
                };
                BidController.prototype.bid = function () {
                    if (!this.authService.isUserAuthenticated) {
                        alert('Please Login First');
                        this.closeModal();
                        this.$state.go('Login');
                        return;
                    }
                    else if (this.ItemUser.bid != 0 && this.ItemUser.bid >= this.auctionItem.minimumBid) {
                        this.ItemUserResource.save(this.ItemUser);
                        this.closeModal();
                    }
                    else {
                        this.erro = true;
                    }
                    this.ItemUser.auctionItemId = this.auctionItemId;
                    this.ItemUser.useriId = this.user.id;
                };
                return BidController;
            }());
            BidController.$inject = ['$resource', '$uibModalInstance', 'auctionItemId', 'AuthenticationService', '$state'];
            Bid.BidController = BidController;
        })(Bid = Views.Bid || (Views.Bid = {}));
    })(Views = AuctionApp.Views || (AuctionApp.Views = {}));
})(AuctionApp || (AuctionApp = {}));
//# sourceMappingURL=bid.controller.js.map