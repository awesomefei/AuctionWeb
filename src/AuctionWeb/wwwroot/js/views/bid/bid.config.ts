namespace AuctionApp.Views.Bid {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('Bid', <ng.ui.IState>{
                url: '/bid',
                templateUrl: 'js/views/bid/bid.view.html',
                controller: 'BidController',
                controllerAs: 'vm'
            });
    }
}