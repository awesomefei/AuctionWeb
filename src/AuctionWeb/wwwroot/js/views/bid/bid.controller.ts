namespace AuctionApp.Views.Bid {

    export class BidController {
        static $inject = ['$resource', '$uibModalInstance', 'auctionItemId', 'AuthenticationService', '$state'];
        public auctionItem: AuctionItem;
        private ItemUser: Model.ItemUserViewModel;
        private AuctionResource;
        private ItemUserResource;
        private UserResource;
        private hasBeenEdited;
        public erro = false;
        
        public get user(): Model.User {
            return this.authService.User;
        }

        constructor(
            private $resource: ng.resource.IResourceService,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
            private auctionItemId,
            private authService: Services.AuthenticationService,
            private $state: ng.ui.IStateService,

        ) {
            this.AuctionResource = this.$resource('api/actionItems/:id');
            this.ItemUserResource = this.$resource('api/itemUser');
            this.getAuctionItem(auctionItemId);
            this.hasBeenEdited = false;
        }

        closeModal() {
            this.$uibModalInstance.close({ hasBeenEdited: this.hasBeenEdited });
        }

        getAuctionItem(id: number): AuctionItem{
            return this.auctionItem= this.AuctionResource.get({ 'id': id });
        }
        
        bid() {
            this.ItemUser.auctionItemId = this.auctionItemId;
            this.ItemUser.useriId = this.user.id;
            if (this.ItemUser.bid != 0 && this.ItemUser.bid >= this.auctionItem.minimumBid) {
                this.ItemUserResource.save(this.ItemUser);
                this.closeModal();
            } else {
                this.erro = true;
            }
        }
    }
}