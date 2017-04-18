namespace AuctionApp.Views.Home {

    export class HomeController {
        static $inject = ['$resource', '$uibModal', 'AuthenticationService'];
        public auctionItems: AuctionItem[] = [];
       private AuctionResource: ng.resource.IResourceClass<AuctionItem>;
       private ItemUserResource: ng.resource.IResourceClass<Model.ItemUserViewModel>;
       private ItemUserForWinnersNameResource: ng.resource.IResourceClass<Model.ItemUserViewModel>;
       private ItemUserWinnersBiddedValueResource: ng.resource.IResourceClass<Model.ItemUserViewModel>;
       private bidUsersForEachItem = [];
       public get user(): Model.User {
           return this.authService.User;
       }

        constructor(
            private $resource: ng.resource.IResourceService,
            private $uibModal: ng.ui.bootstrap.IModalService,
            private authService: Services.AuthenticationService,

        ) {
            this.AuctionResource = this.$resource<AuctionItem>('api/actionItems/:id');
            this.ItemUserResource = this.$resource<Model.ItemUserViewModel>('api/itemUser/:id');
            this.ItemUserForWinnersNameResource = this.$resource<Model.ItemUserViewModel>('api/itemUser/bid/:id');
            this.ItemUserWinnersBiddedValueResource = this.$resource<Model.ItemUserViewModel>('api/itemUser/WinnersBiddedValue/:id');
            this.getAuctionItems();
        }

        public isUserLoggedIn(): boolean {
            return this.authService.isUserAuthenticated();
        }

        public bid(id) {
            this.$uibModal.open({
                templateUrl: '/js/views/bid/bid.view.html',
                controller: 'BidController',
                controllerAs: "vm",
                resolve: {
                    auctionItemId: () => id,
                },
                size: 'lg'
            }).result.then((data) => {
                if (data.hasBeenEdited == true) {
                    this.getAuctionItems();
                }
            })
        }

        getAuctionItems() {
            this.AuctionResource.query().$promise
                .then((result) => {
                    result.forEach((auctionItem) => {
                        auctionItem['biddedUsers'] = this.getBidUsers(auctionItem.id);
                        auctionItem['biddedUsers'].$promise
                            .then((response) => {
                                if (response.length >= auctionItem.numberOfBids) {
                                    auctionItem['disabledButton'] = true
                                    auctionItem['winnersName'] = this.getWinnersName(auctionItem.id);
                                    auctionItem['winnersBiddedValue'] = this.getWinnersBiddedValue(auctionItem.id);
                                } else {
                                    auctionItem['disabledButton'] = false
                                }
                            })
                        this.auctionItems.push(auctionItem);
                    });
                });
        }
        getBidUsers(auctionId: number){
            return this.ItemUserResource.query({ id: auctionId });
        }
        getWinnersName(auctionId: number) {
            return this.ItemUserForWinnersNameResource.query({ id: auctionId });
        }
        getWinnersBiddedValue(auctionId: number) {
            return this.ItemUserWinnersBiddedValueResource.get({ id: auctionId });
        }
    }}